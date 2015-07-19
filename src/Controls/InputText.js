import React from 'react'
import styles from '../styles'

export default React.createClass({

  displayName: 'Demo.Controls.InputText',

  propTypes: {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <input
        style={styles.controls.inputs.text}
        type="text"
        value={this.props.value}
        onChange={this.handleChange} />
    )
  },

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

})
