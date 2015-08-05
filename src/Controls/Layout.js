import React from 'react'
import flattenDeep from 'lodash/array/flattenDeep'
import ControlNoop from './ControlNoop'

const style = {
  background: '#eee',
  overflow: 'hidden',
  fontFamily: 'Menlo, Monaco, Consolas, "Lucida Console", monospace'
}
const styleItemTop = {
  float: 'left',
  width: '280px'
}
const styleItemSide = {
  marginBottom: '4px'
}

export default React.createClass({

  displayName: 'Demo.Controls.Layout',

  propTypes: {
    children: React.PropTypes.node.isRequired,
    onTop: React.PropTypes.bool.isRequired
  },

  renderChildren() {
    const childStyles = this.props.onTop ? styleItemTop : styleItemSide
    return flattenDeep(this.props.children)
      .filter(x => x && x.type !== ControlNoop)
      .map((x, i) => <div key={i} style={childStyles}>{x}</div>)
  },

  render() {
    return (
      <div style={style}>
        {this.renderChildren()}
      </div>
    )
  }
})
