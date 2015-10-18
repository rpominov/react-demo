# React-demo [![Build Status](https://travis-ci.org/rpominov/react-demo.svg?branch=master)](https://travis-ci.org/rpominov/react-demo)

A React-component for creating demos of other components.


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
for more examples. Also to run them locally you can do the following:

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

`Demo` is the main component of this library. It allows you to create a demo
of your components with controlable props.

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

The target component that you want to create a demo of.

#### `fullWidth`

If set to `true` full page width will be available to the demo target component.
More precisely full width that avaliable to the `Demo` component.

#### `background`

Sets the background of the demo. Available options are `"light"`, `"dark"`, and `"none"`.
The default value is `"light"` which gives you a Photoshop style light "transparent" background.

#### `codeIndentDepth`

Specifies indentation of component code that is shown in control panel.
The more the value the deeper indentation will go.

#### `props`

This property allows you to configure the props for the demo target.
Accepts an object `{[propName]: propConfig}`.
For each specified `propName` will be created a control on the panel,
and the prop value will pe passed to the target component.

The function that can create `propConfig` objects are available in `Demo.props`,
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

#### `props.text(initialValue)`

The same as `props.string` but uses a textarea as the control, which allows us
to imput multiline strings.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.text('foo\nbar'),
  }}
/>
```


### `props.bool(initialValue)`

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


### `props.choices(options, [initialValue])`

Creates a select input in the panel. The `options` argument can be either
an array of available options, or an object `{[label]: value}`.

Note that you can pass objects of any type in `options` no matter
if you use array or object. When array is used the values will be stringified
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


#### `props.constan(value)`

Allows us set a constant value for a prop. Doesn't create a control on the panel.

```js
import Demo, {props as P} from 'react-demo'

<Demo
  ...
  props={{
    foo: P.constan('bar'),
  }}
/>
```



### `props.callback.log([mapFn])`

Creates a log widget in the panel, and passes a callback to the target component.
Accepts optional `mapFn` that allows you to transform callback args
before they will be shown in the log. Usable when you don't want to see huge
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


### `props.callback.logLatest([mapFn])`

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

