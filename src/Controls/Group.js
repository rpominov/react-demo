import React, {PropTypes} from 'react'

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
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  },

  render() {
    const {name, children} = this.props
    return <label style={style}>
      <span style={styleLabel}>{name}</span>
      {children}
    </label>
  }

})
