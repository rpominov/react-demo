import React from 'react'
import styles from './styles'

export default React.createClass({

  propTypes: {
    padding: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired
  },

  getDefaultProps() {
    return {
      padding: true
    }
  },

  getStyle() {
    return {
      ...styles.layout,
      padding: this.props.padding ? '1em' : '0'
    }
  },

  render() {
    return (
      <div style={this.getStyle()}>
        <div style={styles.layout.controls}>
          {this.props.controls}
        </div>
        <div style={styles.layout.component}>
          {this.props.component}
        </div>
      </div>
    )
  }

})
