export function makeRegistrationDataUnique(data) {
  return {
    ...data,
    username: appendTimestampBack(data.username),
    email: appendTimestampFront(data.email),
  };
}
export function appendTimestampFront(str) {
  return Date.now() + str;
}
export function appendTimestampBack(str) {
  return str + Date.now();
}
