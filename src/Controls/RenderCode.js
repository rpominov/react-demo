import React from 'react'
import stringify from '../stringify'

const style = {
  color: '#777',
  fontSize: '11px',
  padding: '4px',
  whiteSpace: 'pre',
  background: '#fff',
  overflow: 'auto'
}

export default React.createClass({

  displayName: 'Demo.Controls.RenderCode',

  propTypes: {
    element: React.PropTypes.node.isRequired,
    indentDepth: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div style={style}>
        {stringify(this.props.element, {depthLim: this.props.indentDepth})}
      </div>
    )
  }

})
