# React-demo

A React-component for creating demos of other components.
See `examples/index.js` for a usage example.


## Example

```js
<Demo
  target={require('./targets/Button')}
  props={{
    children: Demo.props.string('My button'),
    disabled: Demo.props.bool(false),
    onClick: Demo.props.callback.log()
  }}
/>
```

![](http://g.recordit.co/NTeR5DBJpK.gif)


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
