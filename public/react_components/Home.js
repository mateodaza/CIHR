// modules/Home.js
import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return <div>
               <h> Bienvenido  </h>
                  <ul role="nav">
                    <li><NavLink to="/login/form">Log in</NavLink></li>
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                  </ul>
            </div>
  }
})
