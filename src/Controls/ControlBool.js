import React from 'react'
import Group from './Group'
import InputCheckbox from './InputCheckbox'

export default React.createClass({
  render() {
    return (
      <Group name={this.props.name}>
        <InputCheckbox value={this.props.value} onChange={this.props.onChange} />
      </Group>
    )
  }
})
