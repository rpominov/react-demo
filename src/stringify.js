function stringifySafe(x) {
  try {
    return JSON.stringify(x)
  } catch(e) {
    return JSON.stringify({error: e.message})
  }
}

function shortify(str) {
  if (str.length < 50) {
    return str
  }
  return `${str.slice(0, 45)} ... ${str[str.length - 1]}`
}


export default function stringify(x) {
  return shortify(stringifySafe(x))
}
