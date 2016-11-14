/* eslint-disable no-console */
const Glue = require('glue');
const { promisifyCallback } = require('./utils');

const manifest = {
  server: {
    app: {
      // SERVER WIDE CONSTANTS OR GLOBAL VARIABLES GO HERE
    },
  },
  connections: [
    { port: 80, labels: ['web'] },
    { port: 8080, labels: ['api'], routes: { cors: { origin: ['*'] } }},
  ],
  registrations: [
    { plugin: './web', options: { select: 'web' } },
    { plugin: './api', options: { select: 'api', routes: { prefix: '/api/v1' } } },
    { plugin: 'blipp' },
  ],
};

const options = {
  relativeTo: __dirname,
};

Glue.compose(manifest, options)
.then(server => {
  console.log('Preparando servidor...');
  const initializePromise = new Promise((resolve, reject) => {
    server.initialize(promisifyCallback(resolve, reject));
  });
  const startPromise = () => new Promise((resolve, reject) => {
    server.start(promisifyCallback(resolve, reject));
  });
  return initializePromise
    .then(() => console.log('Iniciando servidor...'))
    .then(startPromise)
    .then(() => console.log('Servidor corriendo...'));
})
.catch(err => {
  console.log('El servidor fallo: ', err);
  process.exit(1);
});
