import React, { Component } from 'react';
import MovieBrief from './components/MovieBrief'
import axios from 'axios';
import './App.css';

class App extends Component {

  async loadPopularMovies() {
    this.resetState()

    const response = await axios.get('https://hyij0h3sy1.execute-api.ap-southeast-2.amazonaws.com/dev/popular');

    this.setState({movies: response.data.results, isLoading: false})
  }

  async loadTopRatedMovies() {
    this.resetState()
    
    const response = await axios.get('https://hyij0h3sy1.execute-api.ap-southeast-2.amazonaws.com/dev/top-rated');
    
    this.setState({movies: response.data.results, isLoading: false})
  }

  resetState = () => {
    this.setState({movies: [], isLoading: true})
  }

  constructor(props){
    super(props);
    this.state= {movies: [], isLoading: true}
    this.imageUrlPrefix = "https://image.tmdb.org/t/p/w1000_and_h563_face"
    this.buttonStyle={
      margin: "0 auto"
    }

    this.loadPopularMovies = this.loadPopularMovies.bind(this);
    this.loadTopRatedMovies = this.loadTopRatedMovies.bind(this);
    this.resetState = this.resetState.bind(this);

    this.loadPopularMovies()
  }

  render() {
    return (
      <>
      { this.state.isLoading &&
        <div className="ui active centered inline loader"></div>
      }
      { !this.state.isLoading &&
        <div>
          <div>
            <button className="ui button" onClick={this.loadPopularMovies}>Popular Movies</button>
            <button className="ui button" onClick={this.loadTopRatedMovies}>Top Rated Movies</button>
          </div>
          <div className="ui items">
            {this.state.movies.map((movie, i) => {
              return (
                  <MovieBrief movie={movie}/>
              )
            })}
          </div>
        </div>
        }
      </>
    );
  }
}

export default App;
