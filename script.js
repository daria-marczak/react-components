var movie = [
	{
		id: 1,
		title: "Harry Potter",
		desc: "Story about magic and how the evil is always defeated by the good",
		poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg"
	},
	{
		id: 2,
		title: "Lion King",
		desc: "Your favourite childhood movie",
		poster: "http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg"
	},
	{
		id: 3,
		title: "The Secret Life of Walter Mitty",
		desc: "Ben Stiller goes on an adventure",
		poster: "http://1.fwcdn.pl/po/75/87/107587/7572051.3.jpg"
	},
	{
		id: 4,
		title: "Spotlight",
		desc: "Denonciation of catholic church",
		poster: "https://upload.wikimedia.org/wikipedia/en/f/f3/Spotlight_%28film%29_poster.jpg"
	}
];

var MovieList = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return React.createElement("div", {},
			React.createElement("h2", {}, this.props.movie.title),
			React.createElement("p", {}, this.props.movie.desc),
			React.createElement("img", {src: this.props.movie.poster})
		)
	}
});

var moviesElements =  movie.map(function(movie) {
	return React.createElement("li", {key: movie.id},
		React.createElement(MovieList, {}),
		);
});


var element =
	React.createElement("div", {},
		React.createElement("h1", {}, "Movie list"),
		React.createElement("ul", {}, moviesElements)
		);

ReactDOM.render(element, document.getElementById("app"));
