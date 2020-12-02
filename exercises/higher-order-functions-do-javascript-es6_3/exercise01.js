
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  let array = [];
  const letsReduce = arrays.reduce((acc, item) => {
  return array.concat(acc,item)
})
  return letsReduce;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);