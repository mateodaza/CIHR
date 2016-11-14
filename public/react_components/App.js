import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Form from './FormExample'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial </h1>
        <Form />
        <ul role="nav">
          <li><NavLink to="/abouts">Abouts</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
