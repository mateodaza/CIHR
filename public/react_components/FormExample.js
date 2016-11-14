/* eslint-disable no-console */
import React from 'react'

export default React.createClass({
  render() {
    return (
              <form onSubmit={this.handleSubmit}>
                  Name: <input type="text" name="firstname" /> <br/><br/>
                  LastName: <input type="text" name="lastname" /> <br/><br/>
                <button className='button button-blue' name="submit_button">
                    <b>submit</b>
                  </button>
                  <br/><br/>
              </form>
          )
  },

  handleSubmit (evt) {
    evt.preventDefault();
    fetch('http://localhost:8080/api/v1/example/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: evt.target.firstname.value,
        lastname: evt.target.lastname.value,
      }),
    })
    .then(response => {
      if (response.ok) {
        console.log('OK');
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
