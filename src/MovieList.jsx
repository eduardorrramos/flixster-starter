import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import MovieModal from './MovieModal';

function MovieList({ keyword}) {
    const [movieData, setMovieData] = useState([]);
    const [page, setPage] = useState(1);
    const [searched, setSearched] = useState(false);
    const [movieYear, setMovieYear] = useState(null);
    // const [selectedMovie, setSelectedMovie] = useState(null);

//     const handleMovieClick = (imgSrc, movieTitle, movieRating) => {
//     console.log(`Clicked movie: ${movieTitle}, rating: ${movieRating}`);
//     // You can add any other logic here to handle the click event
//   };
/*if else if else*/
useEffect(() => {
    fetchData(page, keyword, movieYear, searched);
  }, [page, keyword, movieYear, searched]);
    
    const fetchData = async (page, keyword, movieYear) => {
        const apiToken = import.meta.env.VITE_API_TOKEN
        let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
        if (keyword) {
            if (!searched){
                setPage(1);
                setSearched(true);
                url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
            }
            else {
                // setPage(page + 1);
                url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
            }
        }
        else if (movieYear) {
            if (!searched){
                setPage(1);
                setSearched(true);
                url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${movieYear}&sort_by=popularity.desc&include_adult=false&language=en-US&page=${page}`;
            }
            else {
                // setPage(page + 1);
                url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${movieYear}&sort_by=popularity.desc&include_adult=false&language=en-US&page=${page}`;
            }
        }
        else {
            if (!searched){
                setPage(1);
                setSearched(true);
                url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
            }
            else {
                // setPage(page + 1);
                url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
            }
        }
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiToken}`
                }
            });
        const readabledata = await response.json()
        const arrayof = readabledata.results;
        // setMovieData([]);
        // setMovieData([...movieData, ...arrayof]);
        if (keyword) {
            setMovieData([...movieData, ...arrayof]);
        }
        if (movieYear) {
            setMovieData([...movieData, ...arrayof]);
        }
        else{
            setMovieData([...movieData, ...arrayof]);
        }
    };
    function increment() {
        setPage(page + 1);
        console.log({ page })
    };
    const handleMovieClick = (movie) => {
        console.log(`Clicked movie: ${movie.title}, rating: ${movie.vote_average}`);
        setSelectedMovie(movie);
        console.log(movie)
      };
    //   const handleMovieChange = (newMovie) => {
    //     setMovie(newMovie);
    //   };
    if (!movieData) {
        return <div>Loading</div>
    }
    let url = "http://image.tmdb.org/t/p/w500";
    return (
        <div className="allcards">
            <select className="sortbutton" value={movieYear} onChange={(e) => setMovieYear(e.target.value)}>
  <option value="">Select Year</option>
  {[2000, 2004, 2010].map((year) => (
    <option key={year} value={year}>{year}</option>
  ))}
</select>
            {movieData.map((movie, i) => (
                <MovieCard
                    imgSrc={url + movie.poster_path}
                    key={i}
                    movieTitle={movie.title}
                    movieRating={movie.vote_average}
                    handleClick={() => handleMovieClick(movie)}
                />
            ))} <button onClick={increment}> Load More</button> 
            
            <MovieModal movie ={movieData[0]} id="moviemodal"/></div>
    );
}

MovieList.propTypes = {

};
export default MovieList;