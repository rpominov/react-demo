import Noop from './Controls/ControlNoop'
import String from './Controls/ControlString'
import Text from './Controls/ControlText'
import Json from './Controls/ControlJson'
import Bool from './Controls/ControlBool'
import Choices from './Controls/ControlChoices'
import stringify from './stringify'

export default {

  constant(initialValue) {
    return {
      type: 'value',
      Control: Noop,
      initialValue
    }
  },

  string(initialValue) {
    return {
      type: 'value',
      Control: String,
      initialValue
    }
  },

  text(initialValue) {
    return {
      type: 'value',
      Control: Text,
      initialValue
    }
  },

  json(initialValue) {
    return {
      type: 'value',
      Control: Json,
      initialValue
    }
  },

  bool(initialValue) {
    return {
      type: 'value',
      Control: Bool,
      initialValue
    }
  },

  choices(options, _initialValue) {

    const normOptions = Array.isArray(options)
      ? options.map(x => ({label: stringify(x), value: x}))
      : Object.keys(options).map(key => ({label: key, value: options[key]}))

    const initialValue = _initialValue === undefined
      ? normOptions[0].value
      : normOptions.filter(x => x.label === _initialValue || x.value === _initialValue)[0].value

    return {
      type: 'value',
      Control: Choices,
      initialValue,
      controlProps: {
        options: normOptions
      }
    }
  },

  callback: {

    log(map = null) {
      return {
        type: 'callback',
        callbackType: 'log',
        map
      }
    },

    logLatest(map = null) {
      return {
        type: 'callback',
        callbackType: 'logLatest',
        map
      }
    }

  }

}
