import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Group from './Group'
import InputCheckbox from './InputCheckbox'

export default createReactClass({

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
