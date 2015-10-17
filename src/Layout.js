import React, {PropTypes as T} from 'react'

const bgImages = {
  dark: 'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#777%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#555%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
  light: 'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#eee%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#fff%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
  none: 'none',
}
const bgColors = {
  dark: 'black',
  light: 'white',
  none: 'transparent',
}

const style = {
  backgroundSize: '20px 20px',
  overflow: 'hidden',
  marginBottom: '10px',
  borderStyle: 'solid',
  borderColor: '#ddd',
}
const styleControlsSide = {
  float: 'left',
  borderRight: 'solid 1px #ddd',
  boxSizing: 'border-box',
  width: '280px',
}
const styleComponentSide = {
  marginLeft: '280px',
}
const styleControlsTop = {
  borderBottom: 'solid 1px #ddd',
}
const styleComponentTop = {}


export default React.createClass({

  displayName: 'Demo.Layout',

  propTypes: {
    fullWidth: T.bool.isRequired,
    controlsEl: T.node.isRequired,
    targetEl: T.node.isRequired,
    background: T.oneOf(Object.keys(bgImages)).isRequired,
  },

  getTagretStyle() {
    const {fullWidth} = this.props
    return {
      ...(fullWidth ? styleComponentTop : styleComponentSide),
      padding: !fullWidth ? '1em' : '1em 0',
    }
  },

  getWrapStyle() {
    const {fullWidth, background} = this.props
    return {
      ...style,
      borderWidth: fullWidth ? '1px 0' : '1px',
      backgroundImage: bgImages[background],
      backgroundColor: bgColors[background],
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
  },

})
