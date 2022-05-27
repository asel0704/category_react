export function required(message) {
  return message || "Обязательное поле";
}

export function validatePassword(values) {
  if (values.length < 8) return "Minimum 8 symbols";
}

export function validateCPassword(password) {
  return function (values) {
    if (this.validatePassword !== password) {
      return "Passwords are not same";
    }
  };
}
