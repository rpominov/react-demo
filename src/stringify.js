import isRegexp from 'is-regexp'
import isObject from 'isobject'
import React from 'react'

// Chrome on my machine had performance issues
// with a number greater than 20 and when JSX handler disabled
const MAX_DEPTH = 20


function handlePrimitive(x) {
  const t = typeof x
  if (x === null || x === undefined || t === 'number' || t === 'boolean' || isRegexp(x)) {
    return String(x)
  }
  return null
}

function handleFunction(x) {
  if (typeof x === 'function') {
    return String(x).replace(/{[\s\S]*}/, '=> ...').replace(/.*\(/, '(')
  }
  return null
}

function handleString(x) {
  if (typeof x === 'string') {
    return `"${x}"`
  }
  return null
}

function handleDate(x) {
  if (x instanceof Date) {
    return `Date('${x.toISOString()}')`
  }
  return null
}

function handleArray(x, next, seen) {
  if (Array.isArray(x)) {
    if (x.length === 0) {
      return '[]'
    }
    seen.push(x)
    const result = `[${x.map(next).join(', ')}]`
    seen.pop()
    return result
  }
  return null
}

function wrapJsxProp(x) {
  return x[0] === '"' ? x : `{${x}}`
}

function wrapJsxChildren(x) {
  if (x[0] === '<') {
    return x
  }
  if (x[0] === '"') {
    return x.slice(1, x.length - 1)
  }
  return `{${x}}`
}

function handleJsx(x, next, seen, indent) {
  if (React.isValidElement(x)) {
    const lastIndent = indent === '' ? '' : indent.replace(/\s\s$/, '')
    const name = typeof x.type === 'string' ? x.type : (x.type.displayName || 'Unknown')
    const keys = Object.keys(x.props)
    let props = ''
    let children = null
    if (keys.length > 0) {
      seen.push(x)
      const _keys = keys.filter(key => key !== 'children')
      if (_keys.length > 0) {
        const joint = indent === '' ? ' ' : indent
        props = _keys.map(key => `${key}=${wrapJsxProp(next(x.props[key]))}`)
        props = `${joint}${props.join(joint)}${lastIndent}`
      }
      if (keys.indexOf('children') !== -1) {
        children = wrapJsxChildren(next(x.props.children))
      }
      seen.pop()
    }
    const ending = children === null ? '/>' : `>${indent}${children}${lastIndent}</${name}>`
    return `<${name}${props}${ending}`
  }
  return null
}

function handleObject(x, next, seen, indent) {
  if (isObject(x)) {
    const keys = Object.keys(x)
    if (keys.length === 0) {
      return '{}'
    }
    seen.push(x)
    const joint = indent === '' ? ', ' : `,${indent}`
    const lastIndent = indent === '' ? '' : indent.replace(/\s\s$/, '')
    const body = keys.map(key => `${key}: ${next(x[key])}`).join(joint)
    const result = `{${indent}${body}${lastIndent}}`
    seen.pop()
    return result
  }
  return null
}

function handleUnknown() {
  return '__UnknownType'
}


const handlers = [
  handlePrimitive,
  handleFunction,
  handleString,
  handleDate,
  handleArray,
  handleJsx,
  handleObject,
  handleUnknown,
]

export default function stringify(_x, opts) {
  const seen = []
  function s(x, {indent = '\n  ', depthLim = 0, depth = 0} = {}) {
    if (depth > MAX_DEPTH) {
      return '__DepthLimit'
    }
    if (seen.indexOf(x) !== -1) {
      return '__Circular'
    }
    let i = 0
    let result
    const next = (__x) => s(__x, {indent: indent + '  ', depthLim: depthLim - 1, depth: depth + 1})
    do {
      result = handlers[i](x, next, seen, depthLim > 0 ? indent : '')
      i++
    } while (result === null)
    return result
  }
  return s(_x, opts)
}
