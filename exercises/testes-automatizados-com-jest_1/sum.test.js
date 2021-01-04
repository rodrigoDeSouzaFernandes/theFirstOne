const sum = require('./sum');

describe('Função sum', () => {
    it('soma de 2 + 2 retorna 4', () => {
        expect(sum(2, 3)).toBe(5);
    });
    it('recebe (4,5) e retorna 9', () => {
        expect(9).toEqual(sum(4, 5));
    });
    it('teste se o retorno de 0 ,0 é 0', () => {
        expect(0).toEqual(sum(0, 0));
    });
    it('testa erro ao colocar uma string', () => {
        expect('error1024: put numbers instead strings').toEqual(sum(4, '5'));
    });
});
