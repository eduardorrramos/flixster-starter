import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'


// import requests
// api_key = 'ab418bdf6d93c36a6816d0ab81c2ec63'

function MovieList () {
    const [movieData, setMovieData] = useState([])
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        fetchData(page);
    }, [page]);
    const fetchData = async (page) => {
    const apiToken = import.meta.env.VITE_API_TOKEN
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiToken}`
        }
      })
    const readabledata = await response.json()
    const arrayof = readabledata.results;
    console.log(arrayof)

    setMovieData([...movieData,...arrayof]);
  };

function increment() {
    setPage(page + 1);
    console.log({page})
};

//   const handleMovieChange = (newMovie) => {
//     setMovie(newMovie);
//   };

  if (!movieData) {
    return <div>Loading</div>
  }
    let url = "http://image.tmdb.org/t/p/w500";
    return (
        <>
        {movieData.map((movie, i) => (
            <MovieCard
            // key={movie.id}
            key={i}
            movieTitle={movie.title}
            imgSrc={url + movie.poster_path}
            movieRating={movie.vote_average}
            />               
    ))} <button onClick={increment}> Load More</button> </>    
    );
}

MovieList.propTypes = {

};
export default MovieList;