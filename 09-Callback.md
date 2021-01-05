# Callback

- JavaScript is synchronous
- Execute the code block in order after hoisting
- hoisting : var, function declaration

```js
console.log(1); // 동기
setTimeout(() => console.log(2), 1000); // 비동기
console.log(3); // 동기
```

## Synchronous callback

```js
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('print immediately'));
```

## Asynchronous callback

```js
function printWithDelay(print, delay) {
  setTimeout(print, delay);
}

printWithDelay(() => console.log('print with delay'), 2000);
```

---

## Callback 지옥 체험

```js
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
```

> 콜백 체인의 단점 : 가독성 떨어짐, 디버깅, 유지보수 힘듬
