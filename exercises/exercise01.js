db.movies.find({
	category: {
		$all: [ 'action', 'adventure' ]
	}
});
