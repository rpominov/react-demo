import React, {PropTypes} from 'react'

const style = {
  backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBmaWxsPSIjZjVmNWY1IiBkPSJNMCAwaDEwMHYxMDBIMHptMTAwIDEwMGgxMDB2MTAwSDEwMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTAwIDBoMTAwdjEwMEgxMDB6TTAgMTAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+)',
  backgroundSize: '20px 20px',
  overflow: 'hidden',
  marginBottom: '10px',
  borderStyle: 'solid',
  borderColor: '#ddd'
}
const styleControlsSide = {
  float: 'left',
  borderRight: 'solid 1px #ddd',
  boxSizing: 'border-box',
  width: '280px'
}
const styleComponentSide = {
  marginLeft: '280px'
}
const styleControlsTop = {
  borderBottom: 'solid 1px #ddd'
}
const styleComponentTop = {}


export default React.createClass({

  displayName: 'Demo.Layout',

  propTypes: {
    fullWidth: PropTypes.bool.isRequired,
    controlsEl: PropTypes.node.isRequired,
    targetEl: PropTypes.node.isRequired
  },

  getTagretStyle() {
    const {fullWidth} = this.props
    return {
      ...(fullWidth ? styleComponentTop : styleComponentSide),
      padding: !fullWidth ? '1em' : '1em 0'
    }
  },

  getWrapStyle() {
    const {fullWidth} = this.props
    return {
      ...style,
      borderWidth: fullWidth ? '1px 0' : '1px'
    }
  },

  getControlsStyle() {
    return this.props.fullWidth ? styleControlsTop : styleControlsSide
  },

  render() {
    const {controlsEl, targetEl} = this.props
    return <div style={this.getWrapStyle()} className="react-demo">
      <div style={this.getControlsStyle()} className="react-demo__controls-wrap">
        {controlsEl}
      </div>
      <div style={this.getTagretStyle()} className="react-demo__target-wrap">
        {targetEl}
      </div>
    </div>
  }

})
