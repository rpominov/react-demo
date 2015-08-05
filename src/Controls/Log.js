import React from 'react'
import Group from './Group'

const style = {
  background: '#fff',
  borderTop: 'solid 1px #e5e5e5',
  borderRight: 'solid 1px #e5e5e5',
  borderLeft: 'solid 1px #e5e5e5',
  fontSize: '10px',
  lineHeight: '1.2',
  overflow: 'auto'
}
const styleItem = {
  padding: '0.3em',
  borderBottom: 'solid 1px #e5e5e5'
}

export default React.createClass({

  displayName: 'Demo.Controls.Log',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    return (
      <Group name={this.props.name}>
        <div style={style}>
          {this.props.items.map((x, i) =>
            <div key={i} style={styleItem}>{x}</div>)}
        </div>
      </Group>
    )
  }
})
