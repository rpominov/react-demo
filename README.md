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

See `examples/index.js` for more usage examples.


## Installation

```
$ npm install react-demo
```


## Run examples

```
$ npm install
$ npm run examples
$ open http://localhost:3000
```
