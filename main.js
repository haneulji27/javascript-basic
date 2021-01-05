class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie', password === 'dream') ||
        (id === 'haneul', password === 'coder')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(id, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 2000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  (userId) => {
    userStorage.getRoles(
      userId,
      (userWithRole) => {
        alert(`${userWithRole.name}, ${userWithRole.role}`);
      },
      (error) => console.log(error)
    );
  },
  (error) => {
    console.log(error);
  }
);
