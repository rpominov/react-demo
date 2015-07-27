import React from 'react'
import styles from './styles'

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
      ...(this.props.controlsOnTop ? styles.layout2 : styles.layout).component,
      padding: this.props.padding ? '1em' : '0'
    }
  },

  getControlsStyle() {
    return (this.props.controlsOnTop ? styles.layout2 : styles.layout).controls
  },

  render() {
    return (
      <div style={styles.layout}>
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
