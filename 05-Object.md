# Object

- one of the JavaScript's data types
- a collection of related data and/or functionality
- Nearly all objects in JavaScript are instances of Object
- object = { key : value;}

---

## Literals and properties

```js
const obj1 = {}; // 'object literals' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 27 };

print(ellie);
```

### with JavaScript magic (dynamically typed language)

- can add properties later

```js
ellie.hasJob = true;
console.log(ellie.hasJob); // true
```

- can delete properties later

```js
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined
```

---

## Computed properties

- key should be always string
- 동적으로 실시간으로 `key`에 관한 `value`들을 받아와야할 때 사용

```js
console.log(ellie.name); // 일반적으로 사용
console.log(ellie['name']);
ellie['hasJob'] = true;

console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]);
}

printValue(ellie, 'name');
```

---

## Property value shorthand

```js
const person = makePerson('ellie', 28);

function makePerson(name, age) {
  return {
    // name: name,
    // age: age,
    name,
    age,
  };
}

console.log(person);
```

> `class`가 나오기 이전엔 이렇게 사용.

### Constructor function

```js
const person = new Person('ellie', 28);

function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

console.log(person);
```

> 다른 계산하지않고 순수하게 object만 생성하는 함수들은 위와 같이 작성

## in operator : property existence check (key in obj)

```js
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
```

---

## for..in, vs for..of

- for (key in obj)

```js
const ellie = { name: 'ellie', age: 25 };

for (key in ellie) {
  console.log(key);
}
```

- for (value of iterable)

```js
const array = [1, 2, 3];

for (value of array) {
  console.log(value);
}
```

---

## Fun Cloning

- Object.assign(dest, [obj1, obj2, obj3...])

```js
const user = { name: 'ellie', age: 24 };
const user2 = user;
user2.name = 'coder';

console.log(user.name); // coder, user와 user2는 같은 ref이기 때문에 변한다

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way

const user4 = Object.assign({}, user);
console.log(user4);
```

### another example

```js
const fruit1 = { color: 'red' };
const fruit2 = { color: 'black', size: 'big' };

const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); // black
```

> 마지막에 작성한 `parameter`일수록 앞에 `parameter`와 동일한 값이 있다면 덮어씌움
