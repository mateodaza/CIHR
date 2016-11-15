/* eslint-disable no-console */
const { autobind, BasePlugin } = require('../utils');

class Example extends BasePlugin {

  constructor (server) {
    super(server); // ESTAS DOS LINEAS SON NECESARIAS
    autobind(this); // ESTO ES NECESARIO
    this.server = server;
    this.conn = server.plugins.database.connection;
  }

  /*
  ATRIBUTOS DE INTERES:
    request:
      params: Parametros del path,
      payload: Body en un POST,
      headers: Headers del HTTP,
      auth.credentials: Si tenemos login, aqui estaran los datos de autenticacion de la persona,
      query: Querystring,
  */

  getExample (request, reply) {
    reply(null, 'Example succesful');
  }

  getExamplePath (request, reply) {
    reply(null, request.params.examplePath);
  }

  exampleForm (request, reply) {
    const firstname = request.payload.firstname;
    const lastname = request.payload.lastname;
    console.log('Se hace algo con', firstname, 'y', lastname);
    reply(null, 200);
  }

  exampleDBCall (request, reply) {
    this.conn.query({
      sql: 'SELECT funcionario_est FROM Funcionario WHERE funcionario_cod=? AND funcionario_pwd=?;',
      timeout: 5000,
      values: ['200045678', '123456'],
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
        method: 'GET',
        path: '/example',
        handler: this.getExample,
      },
      {
        method: 'GET',
        path: '/example/{examplePath}',
        handler: this.getExamplePath,
      },
      {
        method: 'POST',
        path: '/example/form',
        config: {
          payload: {
            parse: true,
            override: 'application/json',
          },
        },
        handler: this.exampleForm,
      },
      {
        method: 'GET',
        path: '/example/database-call',
        handler: this.exampleDBCall,
      },
    ];
  }
}

const ExamplePlugin = (server, options, next) => {
  // _server es el mismo server de arriba
  server.dependency([ 'database'/* Lista de nombre de modulos de los que se depende, por ejemplo 'database' */ ],
    (_server, finish) => {
      const example = new Example(server);
      // .registerRoutes es un metodo de BasePlugin que toma las rutas definidas en
      // .getRoutes y las registra con el servidor
      example.registerRoutes();

      // ES IMPORTANTE LLAMAR FINISH AL FINAL DEL DEPENDENCY
      finish();
    });

  // ES IMPORTANTE LLAMAR FINISH AL FINAL DEL MODULO
  next();
};

// Es importante cambiar el nombre porque Hapi tira un error si se encuentra a un
// modulo con el mismo nombre
ExamplePlugin.attributes = {
  name: 'example',
  version: '0.0.1',
};

module.exports = ExamplePlugin;
