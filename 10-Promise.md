# Promise

- promise is a JavaScirpt object for asynchronous operation
- state: pending -> fulfilled or rejected
- Producer vs Consumer

---

## Producer

```js
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  setTimeout(() => {
    resolve('ellie');
    reject(new Error('Error'));
  }, 2000);
});
```

> `new Promise()` 만드는 순간 executor callback Fn이 수행되기 때문에 만약 사용자가 필요할 때 서버 데이터를 받아오고싶다면 다른 방식 이용해야한다

## Consumer : then, catch, finally

```js
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log('finally'));
```

> `resolve()` 에서 성공적으로 값을 받으면 then 실행, `reject()`에서 error를 `catch`를 통해 잡음, `finally()` 성공하든 실패하든 무조건 실행됨

---

## Promise chaining

```js
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

fetchNumber
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 2000);
    });
  })
  .then((num) => console.log(num));
```

---

> `then`은 `promise`를 전달해도된다

---

## Error handling

```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // => .then(hen => getEgg(hen))
  .then(cook)
  .then(console.log);
```

> `then`에서 전달하는 값이 한개라면 생략해서 작성 가능

### - 오류 발생시 catch를 통해 잡고 원하는 값 return 가능

```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`Error! ${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return '😎';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
```

---

## Callback 지옥 Promise로 변경하기!

```js
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie', password === 'dream') ||
          (id === 'haneul', password === 'coder')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 2000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`username: ${user.name}, role: ${user.role}`))
  .catch(console.log);
```
