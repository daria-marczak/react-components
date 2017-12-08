var movies = [{
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

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("h2", {}, this.props.title)
        )
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("p", {}, this.props.desc)
        )
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("img", {
                src: this.props.poster,
                alt: "poster"
            })
        )
    }
});

var MovieElements = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement("h1", {}, "Movie list"),
                React.createElement("ul", {},
                    this.props.movies.map(function(movie) {
                        return React.createElement(Movie, {
                            key: movie.id,
                            movie: movie
                        });
                    })
                )
            )
        )
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement("li", {
                    key: this.props.movie.id
                },
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDesc, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MoviePoster, {
                    poster: this.props.movie.poster
                })
            )
        )
    }
});

var movieElements = React.createElement(MovieElements, {
    movies: movies
});
ReactDOM.render(movieElements, document.getElementById("app"));
