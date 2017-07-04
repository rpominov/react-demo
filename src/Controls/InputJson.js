import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'

function styles(invalid) {
  return {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    borderColor: '#cccccc',
    backgroundColor: invalid ? 'pink' : 'white',
    fontFamily: 'Menlo, Monaco, Consolas, "Lucida Console", monospace',
  }
}

function stringifyFromUntrustedProp(obj) {
  try {
    return JSON.stringify(obj, null, 2)
  } catch (e) {
    return JSON.stringify({
      message: e.message,
    }, null, 2)
  }
}

export default createReactClass({

  displayName: 'Demo.Controls.InputJson',

  propTypes: {
    value: T.any.isRequired,
    onChange: T.func.isRequired,
  },

  getInitialState() {
    return {
      strValue: stringifyFromUntrustedProp(this.props.value),
      invalid: false,
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        strValue: stringifyFromUntrustedProp(nextProps.value),
        invalid: false,
      })
    }
  },

  handleChange(event) {
    const strValue = event.target.value
    let invalid = true
    let value
    try {
      value = JSON.parse(strValue)
      invalid = false
    } catch (e) {} // eslint-disable-line no-empty
    this.setState({strValue, invalid})
    if (!invalid) {
      this.props.onChange(value)
    }
  },

  render() {
    const {strValue, invalid} = this.state
    return <textarea
      rows={4}
      style={styles(invalid)}
      value={strValue}
      onChange={this.handleChange}
    />
  },

})
