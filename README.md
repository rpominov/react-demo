# React-demo

A React-component for creating demos of other components.
See `examples/index.js` for a usage example.


## Example

```js
import React from 'react'
import Demo from 'react-demo'
import Button from './my-components/Button'

React.render(<Demo
  target={Button}
  props={{
    children: Demo.props.string('My button'),
    disabled: Demo.props.bool(false),
    onClick: Demo.props.callback.log()
  }}
/>, el)
```

![](http://g.recordit.co/Px2z77mQpq.gif)


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
