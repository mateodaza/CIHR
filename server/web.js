const inert = require('inert');
const path = require('path');

const Web = (server, options, next) => {
  server.register(inert, err => {
    if (err) {
      next(err);
      return;
    }

    server.route({
      method: 'GET',
      path: '/bundle.js',
      handler: {
        file: {
          path: path.join(__dirname, '..', 'public', 'dist', 'bundle.js'),
        },
      },
    });

    server.route({
      method: 'GET',
      path: '/bundle.js.map',
      handler: {
        file: {
          path: path.join(__dirname, '..', 'public', 'dist', 'bundle.js.map'),
        },
      },
    });

    server.route({
      method: 'GET',
      path: '/favicon.ico',
      handler: {
        file: {
          path: path.join(__dirname, '..', 'public', 'dist', 'favicon.ico'),
        },
      },
    });

    server.route({
      method: 'GET',
      path: '/index.html',
      handler: {
        file: {
          path: path.join(__dirname, '..', 'public', 'dist', 'index.html'),
        },
      },
    });

    server.route({
      method: 'GET',
      path: '/public/{path*}',
      handler: {
        directory: {
          path: path.join(__dirname, '..', 'public'),
          redirectToSlash: true,
          listing: false,
          index: true,
        },
      },
    });

    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        file: {
          path: path.join(__dirname, '..', 'public', 'dist', 'index.html'),
        },
      },
    });

    next();
  });
};

Web.attributes = {
  name: 'web-registry',
  version: '0.0.1',
};

module.exports = Web;
