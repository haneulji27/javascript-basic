# Array

## Declaration

```js
const array1 = [];
const array2 = new Array();
```

---

## Index position

```js
const fruits = ['🍎', '🍌'];

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); // find last index
```

## Looping over an array

```js
const fruits = ['🍎', '🍌'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((item) => console.log(item));
```

```js
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));
```

---

## Addtion, deletion, copy

- push : add an item to the end

```js
fruits.push('🍉', '🍇');
```

- pop : remove an item from the end

```js
fruits.pop();
```

- unshift : add an item to the beginning

```js
fruits.unshift('🍑', '🍅');
```

- shift : remove an item from the beginning

```js
fruits.shift();
```

> Note!! `unshif`t와 `shift`는 `push`, `pop`보다 실행 속도가 느리다.

> `pop`과 `push`는 뒤에있는 빈공간에 데이터를 삽입하지만 `unshift`와 `shift`는 앞에서부터 데이터를 삽입하기 때문에 기존에 있던 데이터들이 한 칸씩 뒤로 밀려서 작성되기 때문이다.

- splice : remove an item by index position

```js
const fruits = ['🍎', '🍌', '🍒', '🍊'];

fruits.splice(1);
console.log(fruits); // 🍎

fruits.splice(1, 1); // 🍌 만 제거

fruits.splice(1, 1, '🍉', '🍇');
console.log(fruits); //["🍎", "🍉", "🍇"]
```

- combine two arrays

```js
const fruits = ['🍎', '🍌', '🍒', '🍊'];

const fruits2 = ['🥥', '🍈'];

const combineFruits = fruits.concat(fruits2);
console.log(combineFruits);
```

---

## Searching

- indexof : find the index

```js
const fruits = ['🍎', '🍌', '🍒', '🍊'];

console.log(fruits.indexOf('🍎'));
```

- includes

```js
const fruits = ['🍎', '🍌', '🍒', '🍊'];

console.log(fruits.includes('🍎')); // true
```

- lastIndexOf

```js
const fruits = ['🍎', '🍌', '🍒', '🍊', '🍎'];

console.log(fruits.indexOf('🍎')); // find first index 🍎
console.log(fruits.lastIndexOf('🍎')); // find last index 🍎
```
