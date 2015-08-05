import React from 'react'

const style = {
  backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBmaWxsPSIjZjVmNWY1IiBkPSJNMCAwaDEwMHYxMDBIMHptMTAwIDEwMGgxMDB2MTAwSDEwMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTAwIDBoMTAwdjEwMEgxMDB6TTAgMTAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+)',
  backgroundSize: '20px 20px',
  fontFamily: 'sans-serif',
  fontSize: '14px',
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
    padding: React.PropTypes.bool.isRequired,
    controlsOnTop: React.PropTypes.bool.isRequired,
    controls: React.PropTypes.node.isRequired,
    element: React.PropTypes.node.isRequired
  },

  getCompStyle() {
    return {
      ...(this.props.controlsOnTop ? styleComponentTop : styleComponentSide),
      padding: this.props.padding ? '1em' : '0'
    }
  },

  getControlsStyle() {
    return this.props.controlsOnTop ? styleControlsTop : styleControlsSide
  },

  render() {
    return (
      <div style={style}>
        <div style={this.getControlsStyle()}>
          {this.props.controls}
        </div>
        <div style={this.getCompStyle()}>
          {this.props.element}
        </div>
      </div>
    )
  }

})
