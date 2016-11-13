import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
// ...
export default React.createClass({
  render() {
    return (
      <div>
        <h2>Abouts</h2>

        {/* add some links */}
        <ul>
          <li><NavLink to="/abouts/reactjs/About1">Abouts 1</NavLink></li>
          <li><NavLink to="/abouts/facebook/About2">Abouts 2</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
          {this.props.children}
      </div>
    )
  }
})
