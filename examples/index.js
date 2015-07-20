import React from 'react'
import Demo from '../src'


const targets = [
  {
    target: require('./targets/Button'),
    props: {
      children: Demo.props.string('My button'),
      disabled: Demo.props.bool(false),
      onClick: Demo.props.callback.log()
    }
  },
  {
    children: (props, update) => (
      <input
        {...props}
        type="text"
        onChange={event => update({
          value: event.target.value
        })}
      />
    ),
    props: {
      value: Demo.props.string('Built-in text input'),
      disabled: Demo.props.bool(false)
    }
  },
  {
    target: 'input', // Built-in component
    padding: false,
    props: {
      type: Demo.props.constant('text'),
      value: Demo.props.string('Built-in text input'),
      disabled: Demo.props.bool(false),
      onChange: Demo.props.callback.logLatest(e => e.target.value)
    }
  }
]


export default React.createClass({

  displayName: 'Demo.Examples',

  render() {
    return (
      <div>
        {targets.map((x, i) => <Demo {...x} key={i} />)}
      </div>
    )
  }
})
