const uppercase = require('./exercicio01');

describe('uppercase', () => {
	it('should return the string changed to uppercase', (done) => {
		const callback = (data) => {
			expect(data).toBe('RODRIGO');
			done();
		};
		uppercase('rodrigo', callback);
	});
});
