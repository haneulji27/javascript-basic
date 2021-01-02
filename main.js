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
