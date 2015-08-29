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
    obj: PropTypes.node.isRequired,
    indentDepth: PropTypes.number.isRequired
  },

  render() {
    const {obj, indentDepth} = this.props
    return <div style={style}>
      {stringify(obj, {depthLim: indentDepth})}
    </div>
  }

})
