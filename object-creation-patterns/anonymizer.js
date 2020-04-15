// Exercise 5

const Account = (function () {
  const possibleChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN' +
        'OPQRSTUVWXYZ';
  const createDisplayName = function createDisplayName() {
    return new Array(16).fill().map(() => (
      possibleChars[Math.floor(Math.random() * possibleChars.length)]
    )).join('');
  };

  const firstName = function firstName(password) {
    if (password !== this.password) return 'Invalid Password';
    return this.firstName;
  };

  const lastname = function lastName(password) {
    if (password !== this.password) return 'Invalid Password';
    return this.lastName;
  };

  const email = function email(password) {
    if (password !== this.password) return 'Invalid Password';
    return this.email;
  };

  const resetPassword = function resetPassword(password, newPassword) {
    if (password !== this.password) return 'Invalid Password';

    this.password = newPassword;
    return true;
  };

  const reanonymize = function reanonymize(self, password) {
    if (password !== this.password) return 'Invalid Password';

    self.displayName = createDisplayName();
    return true;
  };

  return {
    init(email, password, firstName, lastName) {
      const storage = { email, password, firstName, lastName };

      this.firstName = firstName.bind(storage);
      this.lastName = lastName.bind(storage);
      this.email = email.bind(storage);
      this.resetPassword = resetPassword.bind(storage);
      this.reanonymize = reanonymize.bind(storage, this);

      this.displayName = createDisplayName();
      return this;
    }
  };
}());
