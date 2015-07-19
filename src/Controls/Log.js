import React from 'react'
import Group from './Group'

export default React.createClass({

  displayName: 'Demo.Controls.Log',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    return (
      <Group name={this.props.name}>
        <div>
          {this.props.items.map((x, i) => <div key={i}>{x}</div>)}
        </div>
      </Group>
    )
  }
})
