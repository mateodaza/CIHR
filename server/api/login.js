const { autobind, BasePlugin } = require('../utils');

class Login extends BasePlugin {

  constructor (server) {
    super(server);
    autobind(this);
    this.conn = server.plugins.database.connection;
  }

  loginverification (request, reply) {
    const codigo = request.payload.codigo;
    const password = request.payload.password;
    this.conn.query({
      sql: 'SELECT funcionario_est FROM Funcionario WHERE funcionario_cod=? AND funcionario_pwd=?;',
      timeout: 5000,
      values: [codigo, password],
    }, (err, rows, fields) => {
      if (err) {
        reply(new Error(err));
      } else {
        if( rows[0].funcionario_est === 1){
          reply(null, 'EL usuario puede logear');
        }else{
          reply(null, 'el usuario no puede logear');
        }
      }
    });

  }

  // Retorna un arreglo de rutas para el servidor
  getRoutes () {
    return [
        {
        method: 'POST',
        path: '/login/form',
        config: {
          payload: {
            parse: true,
            override: 'application/json',
          },
        },
        handler: this.loginverification,
      }
    ];
  }
}

 const LoginPlugin = (server, options, next) => {
  // _server es el mismo server de arriba
  server.dependency([ 'database'/* Lista de nombre de modulos de los que se depende, por ejemplo 'database' */ ],
    (_server, finish) => {
      const login = new Login(server);
      // .registerRoutes es un metodo de BasePlugin que toma las rutas definidas en
      // .getRoutes y las registra con el servidor
      login.registerRoutes();

      // ES IMPORTANTE LLAMAR FINISH AL FINAL DEL DEPENDENCY
      finish();
    });

  // ES IMPORTANTE LLAMAR FINISH AL FINAL DEL MODULO
  next();
};

LoginPlugin.attributes = {
  name: 'login',
  version: '0.0.1',
};
module.exports = LoginPlugin;