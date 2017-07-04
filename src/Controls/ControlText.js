import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Group from './Group'
import InputMultilineText from './InputMultilineText'

export default createReactClass({

  displayName: 'Demo.Controls.ControlText',

  propTypes: {
    name: T.string.isRequired,
    value: T.string.isRequired,
    onChange: T.func.isRequired,
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputMultilineText value={value} onChange={onChange} />
    </Group>
  },
})
