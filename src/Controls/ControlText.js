import React, {PropTypes} from 'react'
import Group from './Group'
import InputMultilineText from './InputMultilineText'

export default React.createClass({

  displayName: 'Demo.Controls.ControlText',

  propTypes: {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  },

  render() {
    const {name, value, onChange} = this.props
    return <Group name={name}>
      <InputMultilineText value={value} onChange={onChange} />
    </Group>
  }
})
