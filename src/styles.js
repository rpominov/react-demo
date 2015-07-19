/* eslint no-reserved-keys:0 */

const monospaceFont = 'Consolas, "Liberation Mono", Menlo, Courier, monospace'

const transBg = {
  backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBmaWxsPSIjZjVmNWY1IiBkPSJNMCAwaDEwMHYxMDBIMHptMTAwIDEwMGgxMDB2MTAwSDEwMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTAwIDBoMTAwdjEwMEgxMDB6TTAgMTAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+)',
  backgroundSize: '20px 20px'
}

const sideControlsWidth = '20em'

export default {
  layout: {
    ...transBg,
    fontFamily: 'sans-serif',
    fontSize: '14px',
    overflow: 'hidden',
    marginBottom: '1em',
    controls: {
      float: 'left',
      width: sideControlsWidth
    },
    component: {
      padding: '1em',
      marginLeft: sideControlsWidth
    }
  },
  controls: {
    layout: {
      background: '#eee',
      overflow: 'hidden'
    },
    group: {
      fontSize: '0.8em',
      display: 'block',
      padding: '0.4em',
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
    },
    renderCode: {
      fontFamily: monospaceFont,
      color: '#999',
      fontSize: '0.8em',
      padding: '0.4em',
      marginBottom: '0.5em',
      whiteSpace: 'pre'
    }
  }
}
