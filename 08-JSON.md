# JSON

## HTTP

- HTTP(Hypertext Transfer Protocal) : client와 sever가 서로 통신하는 규약
- Hypertext : link, 문서, 이미지 등 리소스

## AJAX

- HTTP를 이용하여 서버에서 데이터를 받아올 수 있는 방법
- Asynchronous JavaScript And XML
- XHR (XMLHttpRequest) : browser API가 제공하는 object 중 하나, 서버에서 데이터를 받아올 수 있다
- 최근에 추가된 fetch() API 많이 사용

## XML

- HTML과 같은 Markup language
- 서버와 데이터를 주고받는 파일 포맷 중 하나
- 불필요한 태그들이 많이 사용되어 파일 사이즈가 커져서 요즘 사용 잘 안함

## JSON

- JavaScript Object Notation
- { key : value}
- 최근에 JSON 파일 포맷 많이 사용함
- 다양한 언어와 플랫폼에서 사용 가능
- string
- serialize <-> deserialize

---

## JSON parse / stringify

### Object to JSON

```js
let json = JSON.stringify(true);

json = JSON.stringify(['apple, banana']);

console.log(json);

const rabbit = {
  name: 'rabbit',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(this.name);
  },
};

json = JSON.stringify(rabbit, (key, value) => {
  return key === 'name' ? 'ellie' : value;
});
console.log(json); // "name": "ellie"
```

> 함수는 object에 들어있는 data가 아니기때문에 표시 안됨

---

### JSON to Object

```js
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json);

console.log(obj);

// obj.jump(); // 함수는 전달 안됨, Error
console.log(obj.birthDate.getDate()); //// birthDate는 string이기 때문에 getDate() 불가능
```

```js
const obj = JSON.parse(json, (key, value) => {
  return key === 'birthDate' ? new Date() : value;
});
```

> getDate() 실행하기 위해서...

---

## 유용한 사이트들

- [http://www.jsondiff.com/](http://www.jsondiff.com/)
- [https://jsonbeautifier.org/](https://jsonbeautifier.org/)
- [https://jsonparser.org/](https://jsonparser.org/)
- [https://tools.learningcontainer.com/json-validator/](https://tools.learningcontainer.com/json-validator/)
