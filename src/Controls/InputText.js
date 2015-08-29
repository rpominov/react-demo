import React, {PropTypes} from 'react'

const style = {
  display: 'block',
  width: '100%',
  boxSizing: 'border-box'
}

export default React.createClass({

  displayName: 'Demo.Controls.InputText',

  propTypes: {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  },

  handleChange(e) {
    this.props.onChange(e.target.value)
  },

  render() {
    return <input
      type="text"
      style={style}
      value={this.props.value}
      onChange={this.handleChange}
    />
  }

})
