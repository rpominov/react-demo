import React from 'react'
import Group from './Group'
import Select from './Select'

export default React.createClass({

  displayName: 'Demo.Controls.ControlChoices',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    choices: React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired
    ).isRequired
  },


  render() {
    return (
      <Group name={this.props.name}>
        <Select
          value={this.props.value}
          values={this.props.choices}
          onChange={this.props.onChange}
        />
      </Group>
    )
  }
})
