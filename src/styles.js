/* eslint no-reserved-keys:0 */

const monospaceFont = 'Menlo, Monaco, Consolas, "Lucida Console", monospace'

const transBg = {
  backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBmaWxsPSIjZjVmNWY1IiBkPSJNMCAwaDEwMHYxMDBIMHptMTAwIDEwMGgxMDB2MTAwSDEwMHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTAwIDBoMTAwdjEwMEgxMDB6TTAgMTAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+)',
  backgroundSize: '20px 20px'
}

const sideControlsWidth = '280px'

export default {
  layout: {
    ...transBg,
    fontFamily: 'sans-serif',
    fontSize: '14px',
    overflow: 'hidden',
    marginBottom: '10px',
    controls: {
      float: 'left',
      border: 'solid 1px #ddd',
      boxSizing: 'border-box',
      width: sideControlsWidth
    },
    component: {
      marginLeft: sideControlsWidth
    }
  },
  controls: {
    layout: {
      background: '#eee',
      overflow: 'hidden'
    },
    group: {
      fontSize: '11px',
      display: 'block',
      padding: '4px',
      marginBottom: '4px',
      label: {
        display: 'block',
        color: '#666',
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
    log: {
      background: '#fff',
      borderTop: 'solid 1px #e5e5e5',
      borderRight: 'solid 1px #e5e5e5',
      borderLeft: 'solid 1px #e5e5e5',
      fontFamily: monospaceFont,
      fontSize: '10px',
      lineHeight: '1.2',
      item: {
        padding: '0.3em',
        borderBottom: 'solid 1px #e5e5e5'
      }
    },
    renderCode: {
      fontFamily: monospaceFont,
      color: '#777',
      fontSize: '11px',
      padding: '4px',
      marginBottom: '5px',
      whiteSpace: 'pre',
      background: '#fff'
    }
  }
}
