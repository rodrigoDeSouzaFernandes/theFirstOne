const { findUserById, getUserName} = require('./exercicio002e003');

describe('para o caso em que o usuário é encontrado', () => {
    it('encontrar paul', () => {
        expect.assertions(1);
        return getUserName(5).then((data) => {
        expect(data).toEqual('Paul');
        });
    });
});