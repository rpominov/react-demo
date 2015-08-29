import React, {PropTypes} from 'react'

export default React.createClass({

  displayName: 'Demo.Controls.InputCheckbox',

  propTypes: {
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  },

  handleChange() {
    this.props.onChange(!this.props.value)
  },

  render() {
    return <input
      type="checkbox"
      checked={this.props.value}
      onChange={this.handleChange}
    />
  }

})
