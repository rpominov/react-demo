import React, {PropTypes as T} from 'react'
import Group from './Group'
import InputText from './InputText'

export default React.createClass({

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
