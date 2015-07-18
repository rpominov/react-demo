import React from 'react'
import Layout from './Layout'



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

  render() {
    return (
      <Layout>
        {Object.keys(this.props.props).map(this.renderControl)}
      </Layout>
    )
  }

})
