import Noop from './Controls/ControlNoop'
import String from './Controls/ControlString'
import Bool from './Controls/ControlBool'

export default {

  constant(initialValue) {
    return {
      Control: Noop,
      initialValue
    }
  },

  string(initialValue) {
    return {
      Control: String,
      initialValue
    }
  },

  bool(initialValue) {
    return {
      Control: Bool,
      initialValue
    }
  }

}
