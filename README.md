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

If set to `true` full page width will be available to demo target component.
More precisely full width that avaliable to the `Demo` component.

#### `background`

Sets the background of the demo. Available options are `"light"`, `"dark"`, and `"none"`.
The default value is `"light"` which gives you a Photoshop style light "transparent" background.

#### `codeIndentDepth`

Specifies indentation of component code that is shown in control panel.
The more the value the deeper indentation will go.

#### `props`

%TODO

