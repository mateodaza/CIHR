module.exports.promisifyCallback = (resolve, reject) => {
  return (err, result) => {
    if (err) {
      return reject(err);
    }
    return resolve(result || true);
  };
};

module.exports.autobind = obj => {
  for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))) {
    let method = obj[name];
    if (!(method instanceof Function) || method === obj.constructor) {
      continue;
    }
    obj[name] = obj[name].bind(obj);
  }
};

module.exports.BasePlugin = class BasePlugin {
  constructor(server) {
    this.registerRoutes = this.registerRoutes.bind(this);

    if (!server) {
      throw new Error('No ha registrado un servidor');
    }
    this._server = server;
  }

  getRoutes () {
    return [];
  }

  registerRoutes () {
    if (this.getRoutes) {
      this._server.route(this.getRoutes());
    } else {
      throw new Error('getRoutes no existe en la instancia del objeto');
    }
  }
};
