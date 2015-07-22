import React from 'react'
import Layout from './Layout'
import Log from './Log'
import RenderCode from './RenderCode'


export default React.createClass({

  displayName: 'Demo.Controls',

  propTypes: {
    renderCode: React.PropTypes.bool.isRequired,
    targetName: React.PropTypes.string.isRequired,
    values: React.PropTypes.object.isRequired,
    logs: React.PropTypes.object.isRequired,
    props: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  renderControl(key) {
    const Control = this.props.props[key].Control
    const props = this.props.props[key].controlProps || {}
    const value = this.props.values[key]
    return (
      <Control
        {...props}
        key={key}
        name={key}
        value={value}
        onChange={this.handleChange(key)} />
    )
  },

  renderLog(key) {
    return <Log key={key} name={key} items={this.props.logs[key]} />
  },

  render() {
    return (
      <Layout>
        {this.props.renderCode &&
          <RenderCode name={this.props.targetName} props={this.props.values} logs={Object.keys(this.props.logs)} />
        }
        {Object.keys(this.props.props).map(this.renderControl)}
        {Object.keys(this.props.logs).map(this.renderLog)}
      </Layout>
    )
  },

  handleChange(key) {
    return (newValue) => {
      this.props.onChange({
        ...this.props.values,
        [key]: newValue
      })
    }
  }

})
