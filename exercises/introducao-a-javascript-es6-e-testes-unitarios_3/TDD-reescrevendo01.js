const assert = require('assert');

const greetPeople = (people) => {
  let result = []
  let greeting = 'Hello ';
  for (let person in people) {
    result.push(greeting + people[person]);
  }
  return result;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);