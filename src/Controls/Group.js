import React from 'react'
import styles from '../styles'

export default React.createClass({

  render() {
    return (
      <label style={styles.controls.group}>
        <span style={styles.controls.group.label}>
          {this.props.name}
        </span>
        {this.props.children}
      </label>
    )
  }

})
