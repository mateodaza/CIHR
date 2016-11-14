import React from 'react'

export default React.createClass({
  render() {
    return (
              <div>
                  Name: <input type="text" name="firstname" /> <br/><br/>
                  LastName: <input type="text" name="lastname" /> <br/><br/>
                  <button class='button button-blue' name="submit_button">
                    <b>submit</b>
                  </button>
                  <br/><br/>
              </div>
          )
  }
})
