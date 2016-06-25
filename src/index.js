import React, {PropTypes as T} from 'react'
import mapValues from 'lodash/object/mapValues'
import pick from 'lodash/object/pick'
import pairs from 'lodash/object/pairs'
import zipObject from 'lodash/array/zipObject'
import forOwn from 'lodash/object/forOwn'
import set from 'lodash/object/set'
import propsDefenitions from './props'
import Layout from './Layout'
import Controls from './Controls'
import stringify from './stringify'

const flattenObjProps = (prop, path) => pairs(prop)
  .map(([key, value]) => {
    const fullPath = [...path, key]

    if (value.type !== 'shape') {
      return [[fullPath.join('.'), value]]
    }

    return flattenObjProps(value.props, fullPath)
  })
  .reduce((head, tail) => head.concat(tail), [])

const flattenProps = (props, path = []) => zipObject(flattenObjProps(props, path))

const nestProps = flatProps => {
  const props = {}

  forOwn(flatProps, (value, key) => {
    set(props, key, value)
  })

  return props
}

const getValueProps = props => pick(props, x => x.type === 'value')
const getCallbackProps = props => pick(props, x => x.type === 'callback')


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
    const { props } = this.props
    const flatProps = flattenProps(props)

    return {
      values: mapValues(getValueProps(flatProps), x => x.initialValue),
      logs: mapValues(getCallbackProps(flatProps), () => []),
    }
  },

  getCallbacks(props) {
    return mapValues(getCallbackProps(props), (x, key) => {
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
    const {children, fullWidth, codeIndentDepth, background, props} = this.props

    const flatProps = flattenProps(props)

    const targetProps = nestProps({...values, ...this.getCallbacks(flatProps)})
    const targetEl = children
      ? children(targetProps, this.updateValues)
      : <this.props.target {...targetProps} />

    const controlsProps = {
      logs,
      values,
      codeIndentDepth,
      targetEl,
      onTop: fullWidth,
      props: getValueProps(flatProps),
      onChange: this.updateValues,
    }
    const controlsEl = <Controls {...controlsProps} />

    const layoutProps = {fullWidth, targetEl, controlsEl, background}
    return <Layout {...layoutProps} />
  },

})
