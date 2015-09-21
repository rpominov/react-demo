import React, {PropTypes} from 'react'
import mapValues from 'lodash/object/mapValues'
import pick from 'lodash/object/pick'
import propsDefenitions from './props'
import Layout from './Layout'
import Controls from './Controls'
import stringify from './stringify'


export default React.createClass({

  displayName: 'Demo',

  propTypes: {
    props: PropTypes.object,
    fullWidth: PropTypes.bool,
    target: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    children: PropTypes.func,
    codeIndentDepth: PropTypes.number
  },

  statics: {props: propsDefenitions},

  getDefaultProps() {
    return {
      props: {},
      fullWidth: false,
      codeIndentDepth: 3
    }
  },

  getInitialState() {
    return {
      values: mapValues(this.getPropsValue(), x => x.initialValue),
      logs: mapValues(this.getPropsCallback(), () => [])
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
        const result = map ? stringify(map(...args)) : args.map(stringify).join(', ')
        const {logs} = this.state
        const nextLog = callbackType === 'logLatest' ? [result] : [result, ...logs[key]]
        this.setState({logs: {...logs, [key]: nextLog}})
      }
    })
  },

  updateValues(changes) {
    this.setState({
      values: {
        ...this.state.values,
        ...changes
      }
    })
  },

  render() {
    const {values, logs} = this.state
    const {children, fullWidth, codeIndentDepth} = this.props

    const targetProps = {...values, ...this.getCallbacks()}
    const targetEl = children
      ? children(targetProps, this.updateValues)
      : <this.props.target {...targetProps} />

    const controlsProps = {
      logs,
      values,
      codeIndentDepth,
      targetEl,
      onTop: fullWidth,
      props: this.getPropsValue(),
      onChange: this.updateValues
    }
    const controlsEl = <Controls {...controlsProps} />

    const layoutProps = {fullWidth, targetEl, controlsEl}
    return <Layout {...layoutProps} />
  }

})
