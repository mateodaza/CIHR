import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Children's International Recursos Humanos</h1>
        <ul role="nav">
          <li><NavLink to="/form">Log in</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
