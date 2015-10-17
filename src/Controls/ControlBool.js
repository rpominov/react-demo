import React, {PropTypes as T} from 'react'
import Group from './Group'
import InputCheckbox from './InputCheckbox'

export default React.createClass({

  displayName: 'Demo.Controls.ControlBool',

  propTypes: {
    name: T.string.isRequired,
    value: T.bool.isRequired,
    onChange: T.func.isRequired,
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputCheckbox value={value} onChange={onChange} />
    </Group>
  },
})
