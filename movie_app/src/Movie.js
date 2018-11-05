import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}) {
    console.log({poster});
    return (
        <div>
            <div className="Movie__column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <LinesEllipsis
                text={synopsis}
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
            />
        </div>
    );
}

function MoviePoster(poster, alt) {
    return (
        <img src={poster} title={alt} alt={alt}  />
    )
}

function MovieGenres(genres) {

}

export default Movie;