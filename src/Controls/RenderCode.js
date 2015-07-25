import React from 'react'
import stringify from '../stringify'
import styles from '../styles'

export default React.createClass({

  displayName: 'Demo.Controls.RenderCode',

  propTypes: {
    element: React.PropTypes.node.isRequired
  },

  render() {
    return (
      <div style={styles.controls.renderCode}>
        {stringify(this.props.element, {deepLim: 3})}
      </div>
    )
  }

})
