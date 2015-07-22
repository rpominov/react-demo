import Noop from './Controls/ControlNoop'
import String from './Controls/ControlString'
import Bool from './Controls/ControlBool'
import Choices from './Controls/ControlChoices'

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

  bool(initialValue) {
    return {
      type: 'value',
      Control: Bool,
      initialValue
    }
  },

  choices(initialValue, choices) {
    return {
      type: 'value',
      Control: Choices,
      initialValue,
      controlProps: {
        choices
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
