import React from 'react'
import Layout from './Layout'
import Log from './Log'



export default React.createClass({


  handleChange(key) {
    return (newValue) => {
      this.props.onChange({
        ...this.props.values,
        [key]: newValue
      })
    }
  },

  renderControl(key) {
    const Control = this.props.props[key].Control
    const value = this.props.values[key]
    return (
      <Control
        name={key}
        value={value}
        onChange={this.handleChange(key)} />
    )
  },

  renderLog(key) {
    return <Log name={key} items={this.props.logs[key]} />
  },

  render() {
    return (
      <Layout>
        {Object.keys(this.props.props).map(this.renderControl)}
        {Object.keys(this.props.logs).map(this.renderLog)}
      </Layout>
    )
  }

})
