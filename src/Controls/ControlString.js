import React from 'react'
import Group from './Group'
import InputText from './InputText'

export default React.createClass({
  render() {
    return (
      <Group name={this.props.name}>
        <InputText value={this.props.value} onChange={this.props.onChange} />
      </Group>
    )
  }
})
