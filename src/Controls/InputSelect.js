import React from 'react'
import styles from '../styles'
import findIndex from 'lodash/array/findIndex'

const optionType = React.PropTypes.shape({
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.any
})

export default React.createClass({

  displayName: 'Demo.Controls.InputSelect',

  propTypes: {
    value: React.PropTypes.any,
    options: React.PropTypes.arrayOf(optionType.isRequired).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  renderOption(choice, index) {
    return <option key={index} value={index}>{choice.label}</option>
  },

  render() {
    return (
      <select
        style={styles.controls.inputs.select}
        value={findIndex(this.props.options, x => x.value === this.props.value)}
        onChange={this.handleChange}
      >
        {this.props.options.map(this.renderOption)}
      </select>
    )
  },

  handleChange(e) {
    this.props.onChange(this.props.options[e.target.value].value)
  }

})
