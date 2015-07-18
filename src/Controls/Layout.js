import React from 'react'
import styles from '../styles'

export default React.createClass({
  render() {
    return (
      <div style={styles.controls.layout}>
        {this.props.children}
      </div>
    )
  }
})
