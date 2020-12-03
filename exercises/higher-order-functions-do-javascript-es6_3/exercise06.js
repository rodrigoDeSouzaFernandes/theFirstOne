
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  return students.reduce((acc, curr, index) => {
    newObject = {}
    newObject['name'] = curr;
    newObject['average'] = grades[index].reduce((a, b) => a + b)/grades[index].length;
    acc.push(newObject)
    return acc
  }, [])
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);
console.log(studentAverage())