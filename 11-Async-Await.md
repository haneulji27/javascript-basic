# Async Await

- 기존에 존재하던 Promise 위에 생긴 syntax. `syntatic sugar` e.g class
- Promise chain 대신 간결하게 표현 가능

---

## Async

> `Promise`를 사용한 예

```js
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 sec...
    resolve('ellie');
  });
}

const user = fetchUser();
console.log(user);
```

> Async 사용한 예, 자동적으로 promise를 만들어준다

```js
async function fetchUser() {
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);
```

---

## Await

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(2000);
  return '🍌';
}
```

> promise로 pickFruits로 바꾸면 callback 지옥이 떠오른다

```js
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);
```

> 위 코드를 async...aswiat로 바꾸고 에러도 잡고 싶다면 try...catch 사용

```js
async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
  } catch {}

  return `${apple} + ${banana}`;
}
```

> 위 코드는 `awiat`가 완전히 데이터를 받아온 후 다음 `await`가 일어나서 2초가 걸린다. apple과 banana는 서로 연관이 없는 데이터이기 때문에 병렬적으로 수행하기 위해서는...

## Promise.all

```js
pickFruits().then(console.log);

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}

pickAllFruits().then(console.log);
```

## Promise.race

- 만약 getApple()이 2초가 걸리고 getBanana()가 4초가 걸린다면 Promise.race를 사용하면 사과만 값으로 받는다

```js
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
```

---

## Homework!

```js
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
```
