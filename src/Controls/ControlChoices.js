import React from 'react'
import Group from './Group'
import InputSelect from './InputSelect'

export default React.createClass({

  displayName: 'Demo.Controls.ControlChoices',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any.isRequired,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render() {
    return (
      <Group name={this.props.name}>
        <InputSelect
          value={this.props.value}
          options={this.props.options}
          onChange={this.props.onChange}
        />
      </Group>
    )
  }

})
