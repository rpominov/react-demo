import React, {PropTypes} from 'react'

const style = {
  backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBmaWxsPSIjZjVmNWY1IiBkPSJNMCAwaDEwMHYxMDBIMHptMTAwIDEwMGgxMDB2MTAwSDEwMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTAwIDBoMTAwdjEwMEgxMDB6TTAgMTAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+)',
  backgroundSize: '20px 20px',
  overflow: 'hidden',
  marginBottom: '10px'
}
const styleControlsSide = {
  float: 'left',
  border: 'solid 1px #ddd',
  boxSizing: 'border-box',
  width: '280px'
}
const styleComponentSide = {
  marginLeft: '280px'
}
const styleControlsTop = {
  border: 'solid 1px #ddd'
}
const styleComponentTop = {}


export default React.createClass({

  displayName: 'Demo.Layout',

  propTypes: {
    padding: PropTypes.bool.isRequired,
    controlsOnTop: PropTypes.bool.isRequired,
    controlsEl: PropTypes.node.isRequired,
    targetEl: PropTypes.node.isRequired
  },

  getCompStyle() {
    const {controlsOnTop, padding} = this.props
    return {
      ...(controlsOnTop ? styleComponentTop : styleComponentSide),
      padding: padding ? '1em' : '0'
    }
  },

  getControlsStyle() {
    return this.props.controlsOnTop ? styleControlsTop : styleControlsSide
  },

  render() {
    const {controlsEl, targetEl} = this.props
    return <div style={style}>
      <div style={this.getControlsStyle()}>{controlsEl}</div>
      <div style={this.getCompStyle()}>{targetEl}</div>
    </div>
  }

})
