import React, {PropTypes} from 'react'
import Group from './Group'
import InputJson from './InputJson'

export default React.createClass({

  displayName: 'Demo.Controls.ControlJson',

  propTypes: {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputJson value={value} onChange={onChange} />
    </Group>
  }
})
