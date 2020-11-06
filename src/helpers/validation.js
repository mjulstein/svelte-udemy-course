function isEmpty(value){
  return !value || value.trim().length === 0;
}
export default {
  ['is-not-empty']: (value) => !isEmpty(value)
}