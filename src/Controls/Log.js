import React from 'react'
import Group from './Group'
import styles from '../styles'

export default React.createClass({

  displayName: 'Demo.Controls.Log',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    return (
      <Group name={this.props.name}>
        <div style={styles.controls.log}>
          {this.props.items.map((x, i) =>
            <div key={i} style={styles.controls.log.item}>{x}</div>)}
        </div>
      </Group>
    )
  }
})
