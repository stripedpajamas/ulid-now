const { ulid } = require('ulid')

document.getElementById('refresh').onclick = getUlid

function getUlid () {
  document.getElementById('ulid-output').textContent = ulid()
}

getUlid()
