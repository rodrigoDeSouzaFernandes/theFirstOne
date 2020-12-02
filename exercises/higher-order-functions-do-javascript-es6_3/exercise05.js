
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha'
];



function containsA() {
  const countA = names.reduce((acc, cur) => {
    cur.split('').every((Element) => Element === 'A' || Element === 'a' ? acc += 1 : acc += 0)
    return acc
}, 0)
return countA
}

assert.deepEqual(containsA(), 20);
console.log(containsA())