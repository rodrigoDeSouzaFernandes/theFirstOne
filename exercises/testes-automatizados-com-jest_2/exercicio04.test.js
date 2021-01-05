const getRepos = require('./exercicio04');

describe('verifica que repositórios se encontram nessa lista.', () => {
  it("should contain 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator'", () => {
    expect.assertions(2);
    return getRepos('https://api.github.com/users/tryber/repos').then(data => {
      expect(data).toContain('enterprise-bridge-panel');
      expect(data).toContain('challenge-bug-hunting-youtrybe-squad-1');
    });
  });
});