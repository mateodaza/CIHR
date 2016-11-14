import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})

//The parts that start with : are URL parameters
//whose values will be parsed out and made available to route
//components on this.props.params[name].

//Example:
///repos/facebook/react
///repos/:userName/:repoName
