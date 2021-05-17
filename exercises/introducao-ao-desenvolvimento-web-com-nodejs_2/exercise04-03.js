const fs = require('fs');

const deleteCharacter = (...ids) => {
  ids = ids.map(e => `${e}`)
  const promise = new Promise((resolve, reject) => {
    fs.readFile('simpsons.json', ((err, content) => {
      if(err)reject(err);

      const data = JSON.parse(content);

      const newData = data.filter(({id}) => !ids.some(elem => elem === id))

      resolve(newData);
    }));
  }).then(data => {
    fs.writeFile('simpsons.json', JSON.stringify(data), () => {})
  })
  // .then(result => {fs.writeFile('simpsons.json', JSON.stringify(result))})
  .catch(err=> console.log(err))
}

deleteCharacter(1, 2, 3)