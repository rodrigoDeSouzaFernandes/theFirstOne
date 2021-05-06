db.movies.find({
	ratings: {
		$size: 4
	},
	$or: [
		{
			category: 'adventure'
		},
		{
			category: 'family'
		}
	],
	imdbRating: {
		$not: {
			$lt: 7
		}
	}
});
