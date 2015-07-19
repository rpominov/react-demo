import React from 'react'
import reject from 'lodash/collection/reject'
import Group from './Group'
import stringify from '../stringify'
import styles from '../styles'


function toPropValue(x) {
  if (typeof x === 'string') {
    return stringify(x)
  }
  return `{${stringify(x)}}`
}

function upFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

export default React.createClass({

  displayName: 'Demo.Controls.RenderCode',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    props: React.PropTypes.object.isRequired,
    callbacks: React.PropTypes.object.isRequired
  },

  getPropCode(key) {
    return `${key}=${toPropValue(this.props.props[key])}`
  },

  getPropsCode() {
    const keys = reject(Object.keys(this.props.props), x => x === 'children')
    if (keys.length === 0) {
      return ''
    }
    return '\n  ' + keys.map(this.getPropCode).join('\n  ')
  },

  getLogsCode() {
    const keys = this.props.logs
    if (keys.length === 0) {
      return ''
    }
    return '\n  ' + keys.map(key => `${key}={log${upFirst(key)}}`).join('\n  ')
  },

  getChildrenCode() {
    const {children} = this.props.props
    if (!children) {
      return '\n/>'
    }
    const str = (typeof children === 'string') ? children : '<Children ... />'
    return `\n>\n  ${str}\n</${this.props.name}>`
  },

  getCode() {
    return '<' + this.props.name + this.getPropsCode() + this.getLogsCode() + this.getChildrenCode()
  },

  render() {
    return (
      <div style={styles.controls.renderCode}>
        {this.getCode()}
      </div>
    )
  }

})
