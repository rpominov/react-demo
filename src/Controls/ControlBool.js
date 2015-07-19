import React from 'react'
import Group from './Group'
import InputCheckbox from './InputCheckbox'

export default React.createClass({

  displayName: 'Demo.Controls.ControlBool',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <Group name={this.props.name}>
        <InputCheckbox value={this.props.value} onChange={this.props.onChange} />
      </Group>
    )
  }
})
