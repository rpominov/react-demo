import React, {PropTypes as T} from 'react'
import Group from './Group'
import InputNumber from './InputNumber'

export default React.createClass({

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
