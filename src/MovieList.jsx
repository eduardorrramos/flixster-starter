import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'

// import requests
// api_key = 'ab418bdf6d93c36a6816d0ab81c2ec63'

function MovieList ({data}) {
    let moviearray = (data.results);
    // console.log(moviearray);
    let url = "http://image.tmdb.org/t/p/w500";
            return (

moviearray.map((movie) => (
            <> {
            <MovieCard
            key={movie.id}
            movieTitle={movie.title}
            imgSrc={url + movie.poster_path}
            movieRating={movie.vote_average}
            />
            }
            </> 
 )) );
    
}

MovieList.propTypes = {

};
export default MovieList;