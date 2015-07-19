import React from 'react'

export default React.createClass({
  render() {
    return (
      <button disabled={this.props.disabled} onClick={() => this.props.onClick()}>
        {this.props.children}
      </button>
    )
  }
})
