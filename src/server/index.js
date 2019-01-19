import React from 'react';
import { Provider } from 'react-redux';
import { match } from 'react-router';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { setMobileDetect, mobileParser } from 'react-responsive-redux';

import { StaticRouter } from 'react-router-dom';
import qs from 'qs';
import compression from 'compression';
import stats from '../../build/react-loadable.json';
import configureStore from '../common/store/configureStore';
import express from 'express';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { loadStateFromSessionStorage } from '../common/helpers/sessionstorage';

import Routes from '../common/routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server
  .disable('x-powered-by')
  .use(compression())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    match(
      { routes: Routes(), location: req.url },
      (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(
            302,
            redirectLocation.pathname + redirectLocation.search,
          );
        } else if (renderProps) {
          // const preloadedState = qs.parse(req.query);
          const context = {};
          const modules = [];

          const preloadedState = loadStateFromSessionStorage();

          const store = configureStore(preloadedState);
          const { dispatch } = store;
          const mobileDetect = mobileParser(req);
          dispatch(setMobileDetect(mobileDetect));
          const markup = renderToString(
            <Provider store={store}>
              <Capture report={moduleName => modules.push(moduleName)}>
                <StaticRouter context={context} location={req.url}>
                  <Routes />
                </StaticRouter>
              </Capture>
            </Provider>,
          );

          const finalState = {
            ...store.getState(),
            ...preloadedState,
          };

          if (context.url) {
            res.redirect(context.url);
          } else {
            const bundles = getBundles(stats, modules);
            const chunks = bundles.filter(bundle =>
              bundle.file.endsWith('.js'),
            );
            const styles = bundles.filter(bundle =>
              bundle.file.endsWith('.css'),
            );

            res.send(`<!doctype html>
              <html lang="en">
              <head>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta charSet='utf-8' />
                  <title>Saijou International Training Center, Inc.</title>
                  <meta name="description" content="Japanese Language Training Center in Philippines, learn nihongo at Quezon City"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                   ${
                     assets.client.css
                       ? `<link rel="stylesheet" type="text/css" href="${
                           assets.client.css
                         }">`
                       : ''
                   }
                  ${styles
                    .map(style => {
                      return `<link rel="stylesheet" type="text/css"s href="${
                        style.file
                      }">`;
                    })
                    .join('\n')}
              </head>
              <body>
                <div id="root">${markup}</div>
                <script>
                  window.__PRELOADED_STATE__ = ${serialize(finalState)}
                </script>
                ${
                  process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}"></script>`
                    : `<script src="${assets.client.js}" crossorigin></script>`
                }
                ${chunks
                  .map(chunk =>
                    process.env.NODE_ENV === 'production'
                      ? `<script src="/${chunk.file}"></script>`
                      : `<script src="http://${process.env.HOST}:${parseInt(
                          process.env.PORT,
                          10,
                        ) + 1}/${chunk.file}"></script>`,
                  )
                  .join('\n')}
                <div id="fb-root"></div>
                <script>(function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));</script>
                <script>window.main();</script>
              </body>
          </html>`);
          }
        } else {
          res.redirect('/404');
        }
      },
    );
  });

export default server;
