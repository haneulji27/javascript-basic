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

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
  return key === 'birthDate' ? new Date() : value;
});

console.log(obj);

// obj.jump(); // 함수는 전달 안됨, Error
console.log(obj.birthDate.getDate()); //// birthDate는 string이기 때문에 getDate() 불가능
