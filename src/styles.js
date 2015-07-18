const monospaceFont = 'Consolas, "Liberation Mono", Menlo, Courier, monospace'

export default {
  layout: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    borderBottom: 'solid 1px #eee',
    overflow: 'hidden',
    controls: {
      float: 'right'
    },
    component: {}
  },
  controls: {
    layout: {
      width: '20em',
    },
    group: {
      background: '#eee',
      fontSize: '0.8em',
      display: 'block',
      padding: '0.2em',
      marginBottom: '0.4em',
      label: {
        display: 'block',
        color: '#999',
        fontFamily: monospaceFont
      }
    },
    inputs: {
      text: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box'
      },
      checkbox: {}
    }
  }
}
