import React, { Component } from 'react';

class MovieBrief extends Component {

    resetState = () => {
      this.setState({movies: [], isLoading: true})
    }
  
    constructor(props){
      super(props);
      this.imageUrlPrefix = "https://image.tmdb.org/t/p/w1000_and_h563_face"
    }
  
    render() {
      return (
        <>
        <div className="item">
            <div className="image">
                <img src={`${this.imageUrlPrefix}${this.props.movie.poster_path}`} alt="img"></img>
            </div>
            <div className="content">
                <a className="header">{this.props.movie.title}</a>
                <div className="meta">
                <span>Description</span>
                </div>
                <div className="description">
                <p></p>
                </div>
                <div className="extra">
                {this.props.movie.overview}
                </div>
            </div>
        </div>
        </>
      );
    }
  }
  
  export default MovieBrief;