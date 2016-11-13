
const Hapi = require('hapi');
const Good = require('good');
const server = new Hapi.Server();

var PORT = process.env.PORT || 3000;
var plugins = [
  require('inert'),
  require('vision')
];

server.register(plugins, function() {
  server.connection({ port: PORT });

  // Serve up all static content in public folder
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        path: './public',
        listing: false,
        index: true
      }
    }
  });

  // Start your Mullet Server
  server.start(function () {
    console.log('Server is running on port:', PORT);
  });
});
