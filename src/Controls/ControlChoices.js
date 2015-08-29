import React, {PropTypes} from 'react'
import Group from './Group'
import InputSelect from './InputSelect'

export default React.createClass({

  displayName: 'Demo.Controls.ControlChoices',

  propTypes: {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired
  },

  render() {
    const {name, value, options, onChange} = this.props
    return <Group name={name}>
      <InputSelect value={value} options={options} onChange={onChange} />
    </Group>
  }

})
