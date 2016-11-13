import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
//We will use a spread operator here,
//... . It clones our props and in this
//use case it clones activeClassName to our desired component for us to benefit from.
