const sum = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'error1024: put numbers instead strings';
	} else {
		return a + b;
	}
};

module.exports = sum;
