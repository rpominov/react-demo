import React from 'react'
import mapValues from 'lodash/object/mapValues'
import pick from 'lodash/object/pick'
import propsDefenitions from './props'
import Layout from './Layout'
import Controls from './Controls'
import stringify from './stringify'


export default React.createClass({

  displayName: 'Demo',

  propTypes: {
    props: React.PropTypes.object,
    padding: React.PropTypes.bool,
    controlsOnTop: React.PropTypes.bool,
    target: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),
    children: React.PropTypes.func,
    codeIndentDepth: React.PropTypes.number
  },

  statics: {props: propsDefenitions},

  getDefaultProps() {
    return {
      props: {},
      padding: true,
      controlsOnTop: false,
      codeIndentDepth: 3
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

  render() {
    const props = {...this.state.values, ...this.getCallbacks()}

    const element = this.props.children
       ? this.props.children(props, this.updateValues)
       : <this.props.target {...props} />

    return (
      <Layout
        padding={this.props.padding}
        controlsOnTop={this.props.controlsOnTop}
        element={element}
        controls={
          <Controls
            element={element}
            props={this.getPropsValue()}
            values={this.state.values}
            onChange={this.hangelValuesChange}
            logs={this.state.logs}
            onTop={this.props.controlsOnTop}
            codeIndentDepth={this.props.codeIndentDepth} />
        }
      />

    )
  },

  updateValues(changes) {
    this.setState({
      values: {
        ...this.state.values,
        ...changes
      }
    })
  },

  hangelValuesChange(newValues) {
    this.setState({values: newValues})
  }

})
