import React, {PropTypes as T} from 'react'
import Group from './Group'
import InputJson from './InputJson'

export default React.createClass({

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
