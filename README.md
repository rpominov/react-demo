# React-demo [![Build Status](https://travis-ci.org/rpominov/react-demo.svg?branch=master)](https://travis-ci.org/rpominov/react-demo)

A React-component for creating demos of other components. See also [react-demo-library](https://github.com/rpominov/react-demo-library)


## Example

```js
import React from 'react'
import Demo, {props as P} from 'react-demo'
import MyButton from './my-components/MyButton'

React.render(<Demo
  target={MyButton}
  props={{
    label: P.string('Click me'),
    disabled: P.bool(false),
    onClick: P.callback.log(),
  }}
/>, el)
```

![](http://g.recordit.co/IgZ2E9IUTm.gif)

See [examples/index.js](https://github.com/rpominov/react-demo/blob/master/examples/index.js)
for more examples. You can play with it online at [webpackbin.com](http://www.webpackbin.com/4J0Js5QAg), 
or to run them locally do the following:

```
$ npm install
$ npm run examples
$ open http://localhost:3000
```


## Installation

```
$ npm install react-demo
```


## API

### The `Demo` component

`Demo` is the main component of this library. It allows us to create a demo
of our components with controllable props.

```js
import Demo from 'react-demo'

<Demo
  target={DemoTargetComponent}
  fullWidth={false}
  background="light"
  codeIndentDepth={3}
  props={propsConfig}
/>
```

#### `target`

The target component that we want to create a demo of.

#### `fullWidth`

If set to `true` full page width will be available to the demo target component.
More precisely full width that avaliable to the `Demo` component.

#### `background`

Sets the background of the demo. Available options are `"light"`, `"dark"`, and `"none"`.
The default value is `"light"` which gives us a Photoshop style light "transparent" background.

#### `codeIndentDepth`

Specifies indentation of component code that is shown in control panel.
The more the value the deeper indentation will go.

#### `props`

This property allows us to configure the props for the demo target.
Accepts an object `{[propName]: propConfig}`.
For each specified `propName` will be created a control on the panel,
and the prop value will pe passed to the target component.

The functions that can create `propConfig` objects are available in `Demo.props`,
and described bellow in this docs.



### Available `Demo.props`

#### `props.string(initialValue)`

Creates a string input in the panel.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.string('bar'),
  }}
/>
```

#### `props.number(initialValue)`

Creates a number input in the panel.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.number(10),
  }}
/>
```

#### `props.text(initialValue)`

The same as `props.string` but uses a textarea as the control, which allows us
to input multiline strings.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.text('foo\nbar'),
  }}
/>
```


#### `props.bool(initialValue)`

Creates a checkbox on the panel.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.bool(false),
  }}
/>
```


#### `props.choices(options, [initialValue])`

Creates a select input in the panel. The `options` argument can be either
an array of available options, or an object `{[label]: value}`.

Note that we can pass objects of any type in `options` no matter
if we use array or object. When array is used the values will be stringified
before using as labels in the control.

Acepts optional `initialValue` as a second argument.
By default the first option is used as the initial value.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.choices([1, 'two', <Three />]),
    bar: P.choices({
      one: 1,
      two: 'two',
      three: <Three />,
    }),
  }}
/>
```



#### `props.json(initialValue)`

Allows us to input arbitrary json as a prop value. Uses enhanced textarea as a control.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.json({bar: 'baz'}),
  }}
/>
```


#### `props.constant(value)`

Allows us set a constant value for a prop. Doesn't create a control on the panel.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.constant('bar'),
  }}
/>
```



#### `props.callback.log([mapFn])`

Creates a log widget in the panel, and passes a callback to the target component.
Accepts optional `mapFn` that allows us to transform callback args
before they will be shown in the log. Usable when we don't want to see huge
event objects in the log for instance.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.callback.log()
  }}
/>
```


#### `props.callback.logLatest([mapFn])`

Same as `callback.log`, but shows only the last item in the log.
Usable if callback may be called too frequently.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.callback.logLatest()
  }}
/>
```


### Advanced mode

The advanced mode allows us to create more complex demos.
To use advanced mode instead of specifying `target` prop,
pass a custom render function as a child of `Demo`.

The custom render fucntion accepts `props` as the first argument.
The following two snippets are equivalent.

```js
// Normal mode
<Demo target={Foo} ... />

// Same in advanced mode
<Demo ... >
  {props => <Foo {...props} />}
</Demo>
```

In the advanced mode we also get access to the `update` function,
using which we are able to update the demo props' values.
The `update` function is passed as a second argument
to the custom render function. We're supossed to call `update()` similary
to `setState()` — passing an object with props that we want to change.

```js
<Demo props={{value: P.string('foo')}}>
  {
    (props, update) =>
      <input
        value={props.value}
        onChange={e => {update({value: e.target.value})}}
      />
  }
</Demo>
```
