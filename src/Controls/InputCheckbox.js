import React from 'react'
import styles from '../styles'

export default React.createClass({

  handleChange() {
    this.props.onChange(!this.props.value)
  },

  render() {
    return (
      <input
        style={styles.controls.inputs.checkbox}
        type="checkbox"
        checked={this.props.value}
        onChange={this.handleChange} />
    )
  }

})
