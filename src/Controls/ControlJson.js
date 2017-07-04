import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Group from './Group'
import InputJson from './InputJson'

export default createReactClass({

  displayName: 'Demo.Controls.ControlJson',

  propTypes: {
    name: T.string.isRequired,
    value: T.any.isRequired,
    onChange: T.func.isRequired,
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputJson value={value} onChange={onChange} />
    </Group>
  },
})
