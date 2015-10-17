import React, {PropTypes as T} from 'react'
import Group from './Group'
import InputSelect from './InputSelect'

export default React.createClass({

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
