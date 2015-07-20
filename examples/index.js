import React from 'react'
import Demo from '../src'


const targets = [
  {
    target: require('./targets/Button'),
    props: {
      children: Demo.props.choices('My button', [
        'My button',
        'Your button'
      ]),
      disabled: Demo.props.bool(false),
      onClick: Demo.props.callback.log()
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
  },
  {
    children: (props, update) => (
      <div style={{
        background: props.background,
        padding: props.padding,
        display: 'inline-block'
      }}>
        <input
          value={props.value}
          disabled={props.disabled}
          type="text"
          onChange={event => update({value: event.target.value})}
        />
      </div>
    ),
    props: {
      value: Demo.props.string('Adveanced example'),
      disabled: Demo.props.bool(false),
      background: Demo.props.string('green'),
      padding: Demo.props.string('5px')
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
