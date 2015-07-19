import React from 'react'
import mapValues from 'lodash/object/mapValues'
import pick from 'lodash/object/pick'
import props from './props'
import Layout from './Layout'
import Controls from './Controls'


function stringify(x) {
  try {
    return JSON.stringify(x)
  } catch(e) {
    return JSON.stringify(e.message)
  }
}


export default React.createClass({

  statics: {props},

  propTypes: {
    props: React.PropTypes.object,
    target: React.PropTypes.instanceOf(React.Component).isRequired
  },

  getDefaultProps() {
    return {
      props: {}
    }
  },

  getPropsValue() {
    return pick(this.props.props, x => x.type === 'value')
  },

  getPropsCallback() {
    return pick(this.props.props, x => x.type === 'callback')
  },

  getCallbacks() {
    return mapValues(this.getPropsCallback(), (x, key) => {
      return (...args) => {
        const {map, callbackType} = x
        const result = map ? stringify(map(...args)) : `(${args.map(stringify).join(', ')})`
        this.setState({logs: {
          ...this.state.logs,
          [key]: callbackType === 'logLatest' ? [result] : [result, ...this.state.logs[key]]
        }})
      }
    })
  },

  getInitialState() {
    return {
      values: mapValues(this.getPropsValue(), x => x.initialValue),
      logs: mapValues(this.getPropsCallback(), () => [])
    }
  },

  hangelValuesChange(newValues) {
    this.setState({values: newValues})
  },

  render() {
    return (
      <Layout
        padding={this.props.padding}
        component={
          <this.props.target {...this.state.values} {...this.getCallbacks()} />
        }
        controls={
          <Controls
            props={this.getPropsValue()}
            values={this.state.values}
            onChange={this.hangelValuesChange}
            logs={this.state.logs} />
        }
      />

    )
  }

})
