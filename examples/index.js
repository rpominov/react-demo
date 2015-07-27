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
    target: 'input', // Use strings for built-in components
    padding: false, // You can disable padding ...
    controlsOnTop: true, // ... and/or put controls on top
    props: {
      type: Demo.props.constant('text'),
      value: Demo.props.string('Built-in text input'),
      disabled: Demo.props.bool(false),
      onChange: Demo.props.callback.logLatest(e => e.target.value) // You can provide a mapper function for log
    }
  },
  {
    target: 'div',
    props: {
      style: Demo.props.choices([{color: 'green'}, {color: 'red'}]), // You can provide choices options in array...
      children: Demo.props.choices({ // ... or as an object
        foo: <h1>Foo</h1>,
        bar: <h2>Bar</h2>
      }, 'bar') // Also you can change the default initialVaue (first item)
    }
  },
  {
    children: (props, update) => ( // You can provide custom function that renders your component
      <div style={{
        background: props.background,
        padding: props.padding,
        display: 'inline-block'
      }}>
        <input
          value={props.value}
          disabled={props.disabled}
          type="text"
          onChange={event =>
            update({value: event.target.value})} // You can udate props from your custom function
        />
      </div>
    ),
    props: {
      value: Demo.props.string('Advanced example'),
      disabled: Demo.props.bool(false),
      background: Demo.props.choices(['green', 'red']),
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
