const exercise06 = require('./exercise06');

describe('testing API', () => {
  const dogApi = jest.spyOn(exercise06, 'dogPictures');
  afterEach(dogApi.mockReset);
})