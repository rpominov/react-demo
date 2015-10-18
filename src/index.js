import React, {PropTypes as T} from 'react'
import mapValues from 'lodash/object/mapValues'
import pick from 'lodash/object/pick'
import propsDefenitions from './props'
import Layout from './Layout'
import Controls from './Controls'
import stringify from './stringify'


export default React.createClass({

  displayName: 'Demo',

  propTypes: {
    props: T.object,
    fullWidth: T.bool,
    target: T.oneOfType([T.func, T.string]),
    children: T.func,
    codeIndentDepth: T.number,
    background: Layout.propTypes.background,
  },

  statics: {props: propsDefenitions},

  getDefaultProps() {
    return {
      props: {},
      fullWidth: false,
      codeIndentDepth: 3,
      background: 'light',
    }
  },

  getInitialState() {
    return {
      values: mapValues(this.getPropsValue(), x => x.initialValue),
      logs: mapValues(this.getPropsCallback(), () => []),
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
        this.setState(state => ({logs: {...state.logs, [key]: nextLog}}))
      }
    })
  },

  updateValues(changes) {
    const updater = typeof changes === 'function'
      ? state => ({values: changes(state.values)})
      : state => ({values: {...state.values, ...changes}})
    this.setState(updater)
  },

  render() {
    const {values, logs} = this.state
    const {children, fullWidth, codeIndentDepth, background} = this.props

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
      onChange: this.updateValues,
    }
    const controlsEl = <Controls {...controlsProps} />

    const layoutProps = {fullWidth, targetEl, controlsEl, background}
    return <Layout {...layoutProps} />
  },

})
