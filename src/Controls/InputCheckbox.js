import React, {PropTypes as T} from 'react'

export default React.createClass({

  displayName: 'Demo.Controls.InputCheckbox',

  propTypes: {
    value: T.bool.isRequired,
    onChange: T.func.isRequired,
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
  },

})
