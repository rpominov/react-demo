import React from 'react'

export default React.createClass({
  render() {
    return (
      <button disabled={this.props.disabled}>
        {this.props.children}
      </button>
    )
  }
})
