import React, {PropTypes} from 'react'
import Group from './Group'
import InputCheckbox from './InputCheckbox'

export default React.createClass({

  displayName: 'Demo.Controls.ControlBool',

  propTypes: {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputCheckbox value={value} onChange={onChange} />
    </Group>
  }
})
