# Array APIs

## Q1. make a string out of an array

```js
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join('');
console.log(result);
```

---

## Q2. make an array out of a string

```js
const fruits = '🍎, 🥝, 🍌, 🍒';
const result = fruits.split(', ');
console.log(result);
```

> split(separator, limit?)

---

## Q3. make this array look like this: [5, 4, 3, 2, 1]

```js
const array = [1, 2, 3, 4, 5];
const result = array.reverse();
console.log(result);
console.log(array);
```

> `result`와 `array` 값이 같다. `reverse()`는 `array` 자체도 reverse하고 리턴값도 reverse해준다

---

## Q4. make new array without the first two elements

```js
const array = [1, 2, 3, 4, 5];
const result = array.slice(2, 5);
console.log(result);
```

> `splice`는 배열 자체를 수정, `slice`는 배열에서 원하는 부분만 리턴

---

## Q5 ~ Q10

```js
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
```

## Q5. find a student with the score 90

```js
const result = students.find((student) => student.score === 90);
console.log(result);
```

---

## Q6. make an array of enrolled students

```js
const result = students.filter((student) => student.enrolled === true);
console.log(result);
```

---

## Q7. make an array containing only the students' scores

- result should be: [45, 80, 90, 66, 88]

```js
const result = students.map((student) => student.score);
console.log(result);
```

> `map`은 callback FN에 의해 리턴된 값으로 변경됨

---

## Q8. check if there is a student with the score lower than 50

```js
const result = students.some((student) => student.score < 50);
console.log(result);

const result2 = students.every((student) => student.score < 50);
console.log(result2);
```

> `some` : 배열 안의 element 중 하나라도 참 거짓 check할 때 사용

> `every` : 모든 조건 만족해야할 때 사용

---

## Q9. compute students' average score

```js
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result / students.length);
```

---

## Q10. make a string containing all the scores

- result should be: '45, 80, 90, 66, 88'

```js
const result = students
  .map((student) => student.score)
  .filter((score) => score > 50)
  .join(', ');
console.log(result);
```

---

## Bonus! do Q10 sorted in ascending order

- result should be: '45, 66, 80, 88, 90'

```js
const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b) // b - a 반대로 출력됨
  .join(', ');

console.log(result);
```
