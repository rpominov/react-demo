import React from 'react'
import Group from './Group'
import InputText from './InputText'

export default React.createClass({

  displayName: 'Demo.Controls.ControlString',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },


  render() {
    return (
      <Group name={this.props.name}>
        <InputText value={this.props.value} onChange={this.props.onChange} />
      </Group>
    )
  }
})
