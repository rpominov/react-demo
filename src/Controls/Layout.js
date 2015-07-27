import React from 'react'
import styles from '../styles'
import flattenDeep from 'lodash/array/flattenDeep'
import ControlNoop from './ControlNoop'

export default React.createClass({

  displayName: 'Demo.Controls.Layout',

  propTypes: {
    children: React.PropTypes.node.isRequired,
    onTop: React.PropTypes.bool.isRequired
  },

  renderChildren() {
    const wrapStyles = styles.controls.layout.itemWrap
    const childStyles = this.props.onTop ? wrapStyles.onTop : wrapStyles.onSide
    return flattenDeep(this.props.children)
      .filter(x => x && x.type !== ControlNoop)
      .map((x, i) => <div key={i} style={childStyles}>{x}</div>)
  },

  render() {
    return (
      <div style={styles.controls.layout}>
        {this.renderChildren()}
      </div>
    )
  }
})
