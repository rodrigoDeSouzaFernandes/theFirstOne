const { getUserName } = require('./exercicio002e003');

// describe('para o caso em que o usuário é encontrado', () => {
//     it('encontrar paul', () => {
//         expect.assertions(1);
//         return getUserName(5).then((data) => {
//         expect(data).toBe('Paul');
//         });
//     });
// });

describe('para o caso em que o usuário é encontrado', () => {
    it('encontrar paul', async () => {
        const data = await getUserName(5);
        expect.assertions(1);
        expect(data).toBe('Paul');

    });
});

/*describe('para o caso em que o usuário não é encontrado', () => {
    it('should not find', () => {
        expect.assertions(1)
        return getUserName(7).catch(data => {
            expect(data).toEqual({ error: 'User with 7 not found.' })
        });
    });
});*/

describe('para o caso em que o usuário não é encontrado', () => {
    it('nao deve encontrar', async () => {
        try {
            const data = await getUserName(7);
        } catch (error) {
            expect.assertions(1)
            expect(error).toEqual({ error: 'User with 7 not found.' })
        }
    });
});