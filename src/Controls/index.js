import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import Layout from './Layout'
import Log from './Log'
import RenderCode from './RenderCode'


export default createReactClass({

  displayName: 'Demo.Controls',

  propTypes: {
    values: T.object.isRequired,
    logs: T.object.isRequired,
    props: T.object.isRequired,
    onChange: T.func.isRequired,
    targetEl: T.node.isRequired,
    onTop: T.bool.isRequired,
    codeIndentDepth: T.number.isRequired,
  },

  handleChange(key) {
    return (nextValue) => {
      const {onChange, values} = this.props
      onChange({...values, [key]: nextValue})
    }
  },

  renderLog(key) {
    return <Log key={key} name={key} items={this.props.logs[key]} />
  },

  renderControl(key) {
    const {props, values} = this.props
    const Control = props[key].Control
    const controlProps = props[key].controlProps || {}
    const value = values[key]
    return <Control
      {...controlProps}
      key={key}
      name={key}
      value={value}
      onChange={this.handleChange(key)}
    />
  },

  render() {
    const {onTop, targetEl, codeIndentDepth, props, logs} = this.props
    return <Layout onTop={onTop}>
      <RenderCode obj={targetEl} indentDepth={codeIndentDepth} />
      {Object.keys(props).map(this.renderControl)}
      {Object.keys(logs).map(this.renderLog)}
    </Layout>
  },

})
