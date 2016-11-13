import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
// ...
export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        {/* add some links */}
        <ul>
          <li><NavLink to="/repos/reactjs/Repos1">Repos 1</NavLink></li>
          <li><NavLink to="/repos/facebook/Repos2">Repos 2</NavLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
