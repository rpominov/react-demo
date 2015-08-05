import React from 'react'

const style = {
  display: 'block',
  width: '100%',
  boxSizing: 'border-box'
}

export default React.createClass({

  displayName: 'Demo.Controls.InputText',

  propTypes: {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <input
        style={style}
        type="text"
        value={this.props.value}
        onChange={this.handleChange} />
    )
  },

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

})
