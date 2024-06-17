import propTypes from 'prop-types';
import './MovieCard.css'
import openmodal from './MovieModal'
import { useState, useEffect } from 'react'
import MovieList from './MovieList';
function MovieCard ({ imgSrc, movieTitle, movieRating, handleClick}) {
    return (
        <div className="moviecard" onClick={handleClick}>
        <img className="movieimage" src={imgSrc} />
        <h4 className="movietitle">{movieTitle} </h4>
        <p className="movierating"> {movieRating} 🌟 </p>
    </div>
    )
}
MovieCard.propTypes = {
    imgSrc: propTypes.string.isRequired,
    movieTitle: propTypes.string.isRequired,
    movieRating: propTypes.number.isRequired,
};
export default MovieCard;