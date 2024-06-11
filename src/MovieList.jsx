import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'

// import requests
// api_key = 'ab418bdf6d93c36a6816d0ab81c2ec63'

function MovieList ({data}) {
    
    // console.log(data); /*just twenty movies n data */

    // console.log(data.results);
    let moviearray = (data.results);
    // console.log(moviearray);
    console.log(moviearray[0].title);
    moviearray.map((movie) => {
        console.log(movie.title);
        return
    });
    

  
    return (
        
        <>
        
        <MovieCard
        movieTitle="${movie.title}"
        imgSrc="./public/movie.png"
        movieRating="3"
        />
        
       
        </>

    );
    
}





MovieList.propTypes = {

};
export default MovieList;