import React from 'react'
import mapValues from 'lodash/object/mapValues'
import props from './props'
import Layout from './Layout'
import Controls from './Controls/index'

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

  getInitialState() {
    return {
      values: mapValues(this.props.props, x => x.initialValue)
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
          <this.props.target {...this.state.values} />
        }
        controls={
          <Controls
            props={this.props.props}
            values={this.state.values}
            onChange={this.hangelValuesChange} />
        }
      />

    )
  }

})
