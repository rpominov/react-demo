import React, {PropTypes} from 'react'
import Group from './Group'
import InputText from './InputText'

export default React.createClass({

  displayName: 'Demo.Controls.ControlString',

  propTypes: {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputText value={value} onChange={onChange} />
    </Group>
  }
})
