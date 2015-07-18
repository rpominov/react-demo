import './styles.css'
import React from 'react'
import Demo from '../src'


const targets = [
  {
    target: require('./targets/Button'),
    props: {
      children: Demo.props.string('My button'),
      disabled: Demo.props.bool(false)
    }
  },
  {
    target: 'button', // Built-in component
    props: {
      children: Demo.props.constant('Built-in button'),
      disabled: Demo.props.bool(true)
    }
  }
]


export default React.createClass({
  render() {
    return (
      <div>
        {targets.map(x => <Demo {...x} />)}
      </div>
    )
  }
})
