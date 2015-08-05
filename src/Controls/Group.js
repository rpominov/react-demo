import React from 'react'

const style = {
  fontSize: '11px',
  display: 'block',
  padding: '4px'
}
const styleLabel = {
  display: 'block',
  color: '#666'
}

export default React.createClass({

  displayName: 'Demo.Controls.Group',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired
  },


  render() {
    return (
      <label style={style}>
        <span style={styleLabel}>
          {this.props.name}
        </span>
        {this.props.children}
      </label>
    )
  }

})
