# Function

- Fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value

## Function Declaration

- function name(param1, param2) { body... return;}
- one function === one thing
- naming : doSomething, command, verb
- e.g. createCardAndPoint -> createCard, createPoint
- function is object in JS

```js
function sayHello(message) {
  console.log(message);
}

sayHello('Hello!');
```

---

## Parameters

- primitive parameters : passed by value
- object parameters : passed by reference

```js
function changeName(obj) {
  obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); // {name: "coder"}
```

---

## Default Parameters (added in ES6)

```js
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}

showMessage('Hello!!');
```

---

## Rest Parameters (added in ES6)

```js
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    // for... of
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg)); // forEach
}

printAll('coder', 'ellie', 'haneul');
```

---

## Local Scope

### **밖에서는 안이 보이지않고, 안에서는 밖이 보인다**

자식의 함수가 부모의 함수에 정의된 변수에 접근 가능한 것이 Closure

```js
let globalMessage = 'global';
function printMessage() {
  let message = 'hello'; // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'child';
  }
  printAnother();
  console.log(childMessage); // Error
  return undefined; // 모든 함수들 생략되어있음
}

printMessage();
```

---

## Return a value

```js
function add(a, b) {
  return a + b;
}

const result = add(2, 2);
console.log(result);
```

---

## Early return, early exit

```js
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  }
}
```

> bad code

```js
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic ...
}
```

> good code

---

## First Class Function

- function are treated like any other variable
- can be assigned as a value to variable
- can be passed as an argument to other functions
- can be returned by another function

---

## Function expression

- Function declaration can be called earlier than it is called (hoisted)
- Function expression is created when the excution reaches it

```js
print(); // Error
const print = function () {
  // anonymous function
  console.log('print');
};

print();
const printAgain = print;
printAgain();
```

---

## Callback function using function expression

```js
function randomQuize(answer, printYes, printNo) {
  if (answer === 'love') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('No!');
  // print()
};

randomQuize('love', printYes, printNo);
```

---

## Arrow function

always anonymous function

```js
const simplePrint = () => console.log('Simple Print');
const add = (a, b) => a + b;
const minus = (a, b) => {
  // do something...
  return a - b;
};
```

---

## IIFE : Immediately Invoked Function Expression

```js
(function hello() {
  console.log('hello');
})();
```

---

## Quiz

```js
function calculator(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'minus':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}

console.log(calculator('add', 5, 5));
```

> `switch` 문에서 `break` 생략 가능
