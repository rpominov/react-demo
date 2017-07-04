import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Group from './Group'

const style = {
  background: '#fff',
  borderTop: 'solid 1px #e5e5e5',
  borderRight: 'solid 1px #e5e5e5',
  borderLeft: 'solid 1px #e5e5e5',
  fontSize: '10px',
  lineHeight: '1.2',
  overflow: 'auto',
}
const styleItem = {
  padding: '0.3em',
  borderBottom: 'solid 1px #e5e5e5',
}

export default createReactClass({

  displayName: 'Demo.Controls.Log',

  propTypes: {
    name: T.string.isRequired,
    items: T.arrayOf(T.string).isRequired,
  },

  render() {
    const {name, items} = this.props
    return <Group name={name}>
      <div style={style} className="react-demo__log">
        {items.map((x, i) =>
          <div key={i} style={styleItem} className="react-demo__log-item">
            {x || '<no arguments>'}
          </div>
        )}
      </div>
    </Group>
  },
})
