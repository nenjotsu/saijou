import express from 'express';
import Loadable from 'react-loadable';

let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', function() {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

export default Loadable.preloadAll().then(() => {
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';
  return express()
    .use((req, res) => app.handle(req, res))
    .listen(port, function(err) {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`> Started on ${host}:${port}`);
    });
});
