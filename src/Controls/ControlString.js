import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Group from './Group'
import InputText from './InputText'

export default createReactClass({

  displayName: 'Demo.Controls.ControlString',

  propTypes: {
    name: T.string.isRequired,
    value: T.string.isRequired,
    onChange: T.func.isRequired,
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputText value={value} onChange={onChange} />
    </Group>
  },
})
