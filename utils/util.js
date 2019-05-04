const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const $init = (page) => {
  page.$data = objectUtil.$copy(page.data, true)
}

const $digest = (page) => {
  let data = page.data
  let $data = page.$data
  let ready2set = {}

  for (let k in data) {
    if (!objectUtil.$isEqual(data[k], $data[k])) {
      ready2set[k] = data[k]
      $data[k] = objectUtil.$copy(data[k], true)
    }
  }

  if (Object.keys(ready2set).length) {
    page.setData(ready2set)
  }
}

module.exports = {
  formatTime: formatTime
}
