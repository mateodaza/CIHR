/* eslint-disable no-console */
import React from 'react'
import { browserHistory } from 'react-router';

export default React.createClass({
  render() {
    return (
              <form onSubmit={this.handleSubmit}>
                    Codigo: <input type="text" name="codigo" /> <br/><br/>
                  Password: <input type="password" name="password" /> <br/><br/>
                <button className='button button-blue' name="submit_button">
                    <b>submit</b>
                  </button>
                  <br/><br/>
              </form>
          )
  },

  handleSubmit (evt) {
    evt.preventDefault();
    fetch('http://localhost:8080/api/v1/login/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigo: evt.target.codigo.value,
        password: evt.target.password.value,
      }),
    })
    .then(response => {
      if (response.ok) {
        response.json().then(console.log);
        console.log('OK');
        browserHistory.push('/abouts');
      } else {
        throw new Error(response);
      }
    })
    .catch(error => {
      console.log(error);
      console.log('Ocurrio un error');
    });
  },

});
