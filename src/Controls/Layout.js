import React from 'react'
import styles from '../styles'

export default React.createClass({

  displayName: 'Demo.Controls.Layout',

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render() {
    return (
      <div style={styles.controls.layout}>
        {this.props.children}
      </div>
    )
  }
})
