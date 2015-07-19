import React from 'react'
import Group from './Group'

export default React.createClass({
  render() {
    return (
      <Group name={this.props.name}>
        <div>
          {this.props.items.map(x => <div>{x}</div>)}
        </div>
      </Group>
    )
  }
})
