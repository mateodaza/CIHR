/* eslint-disable no-console */
const mysql = require('mysql');

const DatabasePlugin = (server, options, next) => {
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '951401',
    database : 'proyect',
  });

  connection.connect(err => {
    if (err) {
      return next(err);
    }
    server.expose('connection', connection);
    return next();
  });
};

// Es importante cambiar el nombre porque Hapi tira un error si se encuentra a un
// modulo con el mismo nombre
DatabasePlugin.attributes = {
  name: 'database',
  version: '0.0.1',
};

module.exports = DatabasePlugin;
