const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function isEmpty(value){
  return !value || value.trim().length === 0;
}
function isValidEmailAddress(value){
  return emailRegEx.test(value);
}
export default {
  ['is-not-empty']: (value) => !isEmpty(value),
  ['is-valid-email']: (value) => isValidEmailAddress(value),
}