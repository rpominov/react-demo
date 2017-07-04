import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import stringify from '../stringify'

const style = {
  color: '#777',
  fontSize: '11px',
  padding: '4px',
  whiteSpace: 'pre',
  background: '#fff',
  overflow: 'auto',
}

export default createReactClass({

  displayName: 'Demo.Controls.RenderCode',

  propTypes: {
    obj: T.node.isRequired,
    indentDepth: T.number.isRequired,
  },

  render() {
    const {obj, indentDepth} = this.props
    return <div style={style} className="react-demo__render-code">
      {stringify(obj, {depthLim: indentDepth})}
    </div>
  },

})
