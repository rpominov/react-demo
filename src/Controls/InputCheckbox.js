import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'

export default createReactClass({

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
