import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Group from './Group'
import InputSelect from './InputSelect'

export default createReactClass({

  displayName: 'Demo.Controls.ControlChoices',

  propTypes: {
    name: T.string.isRequired,
    value: T.any.isRequired,
    onChange: T.func.isRequired,
    options: T.arrayOf(T.object).isRequired,
  },

  render() {
    const {name, value, options, onChange} = this.props
    return <Group name={name}>
      <InputSelect value={value} options={options} onChange={onChange} />
    </Group>
  },

})
