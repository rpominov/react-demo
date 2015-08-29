import React, {PropTypes} from 'react'
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
    element: PropTypes.node.isRequired,
    indentDepth: PropTypes.number.isRequired
  },

  render() {
    const {element, indentDepth} = this.props
    return <div style={style}>
      {stringify(element, {depthLim: indentDepth})}
    </div>
  }

})
