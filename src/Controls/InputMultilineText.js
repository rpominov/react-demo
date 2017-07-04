import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'

const style = {
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  borderColor: '#cccccc',
}

export default createReactClass({

  displayName: 'Demo.Controls.InputMultilineText',

  propTypes: {
    value: T.string.isRequired,
    onChange: T.func.isRequired,
  },

  handleChange(e) {
    this.props.onChange(e.target.value)
  },

  render() {
    return <textarea
      rows={4}
      style={style}
      value={this.props.value}
      onChange={this.handleChange}
    />
  },

})
