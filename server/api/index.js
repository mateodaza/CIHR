const API = (server, options, next) => {
  // AQUI VAN AGREGANDO SUS MODULOS
  const plugins = [
    require('./example'),
    require('./database'),
  ];

  // ESTO DE ABAJO NO SE TOCA
  const pluginOptions = { };
  server.register(plugins, pluginOptions, err => {
    if (err) {
      return next(err);
    }
    return next();
  });
};

API.attributes = {
  name: 'api-registry',
  version: '0.0.1',
};

module.exports = API;
