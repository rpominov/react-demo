import React from 'react'
import styles from '../styles'

export default React.createClass({

  displayName: 'Demo.Controls.Select',

  propTypes: {
    value: React.PropTypes.string.isRequired,
    values: React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired
    ).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <select
        style={styles.controls.select}
        value={this.props.value}
        onChange={this.handleChange}
      >
        {this.props.values.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    )
  },

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

})
