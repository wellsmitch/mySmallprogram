const numChar = (val) => {
//   return /^[a-zA-Z0-9]+$/.test(val)
}
const phoneNumber = (val) => {
  return /^1[1-9][0-9]{9}$/.test(val);
}
const codeNumber = (val) => {
    return /^\d{6}$/.test(val);
}
export default {
    numChar: numChar,
    phoneNumber: phoneNumber,
    codeNumber: codeNumber
}