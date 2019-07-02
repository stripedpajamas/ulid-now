const { ulid } = require('ulid')

const refreshBtn = document.getElementById('refresh')
const copyBtn = document.getElementById('copy')

refreshBtn.onclick = getUlid
copyBtn.onclick = copyUlid

function getUlid () {
  document.getElementById('ulid-output').textContent = ulid()
}

function copyUlid () {
  const currentUlid = document.getElementById('ulid-output').textContent
  const tempInput = document.createElement('input')
  tempInput.value = currentUlid
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  tempInput.remove()
}

getUlid()
