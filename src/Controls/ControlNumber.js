import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Group from './Group'
import InputNumber from './InputNumber'

export default createReactClass({

  displayName: 'Demo.Controls.ControlNumber',

  propTypes: {
    name: T.string.isRequired,
    value: T.number.isRequired,
    onChange: T.func.isRequired,
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputNumber value={value} onChange={onChange} />
    </Group>
  },
})
