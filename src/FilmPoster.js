import React from 'react';

function FilmPoster() {
    return (
        <img src={this.props.poster_path} 
            alt={`Poster of the film ${this.props.title}`} />
            )
    }

    export default FilmPoster