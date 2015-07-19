import React from 'react'
import styles from '../styles'

export default React.createClass({

  displayName: 'Demo.Controls.InputCheckbox',

  propTypes: {
    value: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <input
        style={styles.controls.inputs.checkbox}
        type="checkbox"
        checked={this.props.value}
        onChange={this.handleChange} />
    )
  },

  handleChange() {
    this.props.onChange(!this.props.value)
  }

})
