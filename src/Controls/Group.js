import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'

const style = {
  fontSize: '11px',
  display: 'block',
  padding: '4px',
}
const styleLabel = {
  display: 'block',
  color: '#666',
}

export default createReactClass({

  displayName: 'Demo.Controls.Group',

  propTypes: {
    name: T.string.isRequired,
    children: T.node.isRequired,
  },

  render() {
    const {name, children} = this.props
    return <label style={style} className="react-demo__control-group">
      <span style={styleLabel} className="react-demo__control-group-label">
        {name}
      </span>
      {children}
    </label>
  },

})
