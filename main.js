class UserStorage {
  async loginUser(id, password) {
    return setTimeout(() => {
      if (
        (id === 'ellie', password === 'dream') ||
        (id === 'haneul', password === 'coder')
      ) {
        return id;
      } else {
        return new Error('no found');
      }
    }, 2000);
  }

  async getRoles(id) {
    return setTimeout(() => {
      if (id === 'ellie') {
        return { name: 'ellie', role: 'admin' };
      } else {
        return new Error('no access');
      }
    }, 2000);
  }

  async getUserWithRole(id, password) {
    const user = await this.loginUser(id, password);
    const role = await this.getRoles(user);
    return role;
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.getUserWithRole().then(console.log);
