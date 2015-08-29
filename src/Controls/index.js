import React, {PropTypes} from 'react'
import Layout from './Layout'
import Log from './Log'
import RenderCode from './RenderCode'


export default React.createClass({

  displayName: 'Demo.Controls',

  propTypes: {
    values: PropTypes.object.isRequired,
    logs: PropTypes.object.isRequired,
    props: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    element: PropTypes.node.isRequired,
    onTop: PropTypes.bool.isRequired,
    codeIndentDepth: PropTypes.number.isRequired
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
    const {onTop, element, codeIndentDepth, props, logs} = this.props
    return <Layout onTop={onTop}>
      <RenderCode element={element} indentDepth={codeIndentDepth} />
      {Object.keys(props).map(this.renderControl)}
      {Object.keys(logs).map(this.renderLog)}
    </Layout>
  }

})
