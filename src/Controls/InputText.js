import React from 'react'
import styles from '../styles'

export default React.createClass({

  handleChange(e) {
    this.props.onChange(e.target.value)
  },

  render() {
    return (
      <input
        style={styles.controls.inputs.text}
        type="text"
        value={this.props.value}
        onChange={this.handleChange} />
    )
  }

})
