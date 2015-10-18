/* eslint-disable react/no-multi-comp */

import React, {PropTypes as T} from 'react'
import Demo, {props as P} from '../src'

// We're going to use this component as a demo target
const MyButton = React.createClass({

  displayName: 'MyButton',

  propTypes: {
    label: T.string.isRequired,
    onClick: T.func.isRequired,
  },

  render() {
    const {label, onClick, ...otherProps} = this.props
    return <button onClick={() => {onClick()}} {...otherProps}>
      {label}
    </button>
  },

})


// Just a helper component
const Description = React.createClass({

  propTypes: {
    children: T.string.isRequired,
  },

  render() {
    return <p style={{
      padding: 0,
      margin: '40px 0 10px',
      fontFamily: 'sans-serif',
      fontSize: 13,
    }}>
      {this.props.children}
    </p>
  },

})



export default React.createClass({

  render() {
    return <div>


      <Description>
        Simple example.
      </Description>
      <Demo target={MyButton} props={{
        label: P.string('Click me'),
        disabled: P.bool(false),
        onClick: P.callback.log(),
      }} />


      <Description>
        The <tt>fullWidth</tt> prop allows target component to use all avalible
        width of the browser window. Usable for responsive stuff demoing.
      </Description>
      <Demo fullWidth target={MyButton} props={{
        label: P.string('Click me'),
        disabled: P.bool(false),
        onClick: P.callback.log(),
      }} />


      <Description>
        The <tt>background</tt> prop allows you to change the background.
        Avalible options are <tt>light</tt> (the default), <tt>dark</tt>,
        and <tt>none</tt>. We use <tt>dark</tt> in this example.
      </Description>
      <Demo background="dark" target={MyButton} props={{
        label: P.string('Click me'),
        onClick: P.callback.log(),
      }} />


      <Description>
        Advanced mode. Instead of using the <tt>target</tt> prop
        you can provide a custom render function. Just don’t specify
        a <tt>target</tt>, and pass a function as a child of <tt>Demo</tt>.
      </Description>
      <Demo props={{
        label: P.string('Click me'),
        onClick: P.callback.log(),
      }}>
        {props => <MyButton {...props} />}
      </Demo>


      <Description>
        In the advanced mode you also get access to the <tt>update</tt> function,
        using which you are able to update the demo props’ values.
        The <tt>update</tt> function is passed as a second argument
        to the custom render function. You’re supossed to call <tt>update()</tt> similary
        to <tt>setState()</tt> — passing an object with props that you want to change.
      </Description>
      <Demo props={{
        value: P.string('Hello world'),
      }}>
        {
          (props, update) =>
            <input
              value={props.value}
              onChange={e => {update({value: e.target.value})}}
            />
        }
      </Demo>


      <Description>
        The <tt>Demo.props.choices()</tt> prop type allows you to use a select
        control for a prop value. You can define avalible options
        in an array, or as an object. Also you can specify the default
        value using the second argument.
      </Description>
      <Demo target={MyButton} props={{
        label: P.choices(['Click me', 'Don\'t click me']),
        style: P.choices({blue: {color: 'blue'}, red: {color: 'red'}}, 'red'),
        onClick: P.callback.log(),
      }} />


      <Description>
        The <tt>Demo.props.text()</tt> is similar to <tt>Demo.props.string()</tt>,
        but uses a textarea, which allows us to enter multiline strings.
      </Description>
      <Demo target="pre" props={{
        children: P.text('Hello\nWorld'),
      }} />


      <Description>
        The <tt>Demo.props.json()</tt> allows us to input arbitrary json
        as a prop value.
      </Description>
      <Demo target={MyButton} props={{
        label: P.string('Click me'),
        style: P.json({color: 'red'}),
        onClick: P.callback.log(),
      }} />


      <Description>
        The <tt>Demo.props.constant()</tt> allows us to set a constant
        value for a prop.
      </Description>
      <Demo target={MyButton} props={{
        label: P.string('Click me'),
        style: P.constant({color: 'blue'}),
        onClick: P.callback.log(),
      }} />


    </div>
  },
})
