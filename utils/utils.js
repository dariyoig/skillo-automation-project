// Takes registration data object and makes username and email unique by adding timestamps
export function makeRegistrationDataUnique(data) {
  return {
    ...data,
    username: appendTimestampBack(data.username),
    email: appendTimestampFront(data.email),
  };
}

// Adds current timestamp to the beginning of a string
export function appendTimestampFront(str) {
  return Date.now() + str;
}

// Adds current timestamp to the end of a string
export function appendTimestampBack(str) {
  return str + Date.now();
}
