const formatTime = (timestamp, datePrefix = '-', timePrefix = ':') => {
  let date = new Date(timestamp);
  const year = date.getFullYear()
  const month = date.getMonth() + 1 >= 10 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`
  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
  const hour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
  const minute = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
  const second = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`
  return `${year}${datePrefix}${month}${datePrefix}${day}  ${hour}${timePrefix}${minute}${timePrefix}${second}`
  // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export default  {
  formatTime: formatTime,
  formatNumber: formatNumber
}