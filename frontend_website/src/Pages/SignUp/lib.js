export function ValidateEmail(mail) {
  const reg = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  if (mail.match(reg)) {
    return true;
  }
  return false;
}

export function ValidatePassword(password) {
  const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  if (reg.test(password)) {
    return true;
  }
  return false;
}
