import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import './SearchBar.jsx'
import SearchBar from './SearchBar.jsx'
// import getKeyword from './SearchBar.jsx'

// api_key = 'ab418bdf6d93c36a6816d0ab81c2ec63'

function MovieList (keyword) {
    console.log(keyword)
    const [movieData, setMovieData] = useState([])
    const [page, setPage] = useState(1)
    // let keyword = getKeyword();
    useEffect(() => {
        fetchData(page, keyword);
    }, [page, keyword]);

    const fetchData = async (page, keyword) => {
    const apiToken = import.meta.env.VITE_API_TOKEN
    let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
    if (keyword) {
        url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
    }
    const response = await fetch(url,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiToken}`
        }
      })
    const readabledata = await response.json()
    const arrayof = readabledata.results;
    setMovieData([...movieData,...arrayof]);
  };
function increment() {
    setPage(page + 1);
};

const filteredData = movieData.filter((props) => {
    console.log(props.movieTitle)
    console.log(props.movieTitle.toLowerCase())
    return props.movieTitle.toLowerCase().includes(keyword.toLowerCase());
  });
//   const handleMovieChange = (newMovie) => {
//     setMovie(newMovie);
//   };
  if (!movieData) {
    return <div>Loading</div>
  }
    let url = "http://image.tmdb.org/t/p/w500";

    return (
        <div className="allcards">
        {filteredData.map((movie, i) => (
            <MovieCard
            imgSrc={url + movie.poster_path}
            key={i}
            movieTitle={movie.title}
            movieRating={movie.vote_average}
            />    ))} 
    <button onClick={increment}> Load More</button> </div>    
    );
}

MovieList.propTypes = {

};
export default MovieList;