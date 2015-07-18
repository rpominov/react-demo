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
    target: require('./targets/Button'),
    props: {
      children: Demo.props.string('My button 2'),
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
