import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';

import Loadable from 'react-loadable';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Routes from '../common/routes';

const store = configureStore(window.__PRELOADED_STATE__);

const root = document.getElementById('root');

window.main = () => {
  render(Routes);
};

if (module.hot) {
  module.hot.accept('../common/routes', () => {
    const NewApp = require('../common/routes').default;
    render(NewApp);
  });
}

function render(Root) {
  Loadable.preloadReady().then(() => {
    hydrate(
      <BrowserRouter>
        <Provider store={store}>
          <Root />
        </Provider>
      </BrowserRouter>,
      root
    );
  });
}
