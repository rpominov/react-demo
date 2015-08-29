import React, {PropTypes} from 'react'

function styles(invalid) {
  return {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    borderColor: '#cccccc',
    backgroundColor: invalid ? 'pink' : 'white',
    fontFamily: 'Menlo, Monaco, Consolas, "Lucida Console", monospace'
  }
}

function stringifyFromUntrustedProp(obj) {
  try {
    return JSON.stringify(obj, null, 2)
  } catch(e) {
    return JSON.stringify({
      message: e.message
    }, null, 2)
  }
}

export default React.createClass({

  displayName: 'Demo.Controls.InputJson',

  propTypes: {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      strValue: stringifyFromUntrustedProp(this.props.value),
      invalid: false
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        strValue: stringifyFromUntrustedProp(nextProps.value),
        invalid: false
      })
    }
  },

  fromProp(obj) {
    try {
      return JSON.stringify(obj, null, 2)
    } catch(e) {
      return JSON.stringify({
        message: e.message
      }, null, 2)
    }
  },

  handleChange(event) {
    const nextStrValue = event.target.value
    try {
      this.props.onChange(JSON.parse(nextStrValue))
    } catch (e) {
      this.setState({strValue: nextStrValue, invalid: true})
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
  }

})
