import React, {PropTypes} from 'react'
import findIndex from 'lodash/array/findIndex'

const style = {
  display: 'block',
  width: '100%',
  boxSizing: 'border-box'
}

const optionType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any
})

export default React.createClass({

  displayName: 'Demo.Controls.InputSelect',

  propTypes: {
    value: PropTypes.any,
    options: PropTypes.arrayOf(optionType.isRequired).isRequired,
    onChange: PropTypes.func.isRequired
  },

  handleChange(e) {
    this.props.onChange(this.props.options[e.target.value].value)
  },

  renderOption(choice, index) {
    return <option key={index} value={index}>{choice.label}</option>
  },

  render() {
    const {options, value} = this.props
    return <select
      style={style}
      value={findIndex(options, x => x.value === value)}
      onChange={this.handleChange}
    >
      {options.map(this.renderOption)}
    </select>
  }

})
