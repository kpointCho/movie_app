import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {};

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    let _movies = await this._callApi();
    this.setState({ movies: _movies });
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then( data => data.json() )
      .then( json => json.data.movies )
      .catch( err => console.log(err) );
  }

  renderMovies = () => {
    // return { index: this.state.movies.id,
    //   title: this.state.movies.title,
    //   poster: this.state.movies.large_cover_image,
    //   genres: this.state.movies.genres,
    //   sysnopsis: this.state.movies.synopsis }
    const movie = this.state.movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          poster={movie.large_cover_image}
          genres={movie.genres}
          sysnopsis={movie.synopsis}>
        </Movie>
      );
    });

    return movie;
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'App' : 'App--loading'}>
        {movies ? this.renderMovies() : "App loading"}
      </div>
    );
  }
}

export default App;
