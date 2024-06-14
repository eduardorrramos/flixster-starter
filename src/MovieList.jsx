import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import MovieModal from './MovieModal';

function MovieList({movieData, increment}) {
    // const [movieData, setMovieData] = useState([]);
    // const [page, setPage] = useState(1);
    // const [searched, setSearched] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState('');
    const [openModal, setOpenModal] = useState('false')


    const handleMovieClick = (movie) => {
        console.log(movie);
        // console.log(`Clicked movie: ${movie.title}, rating: ${movie.vote_average}`);
        setSelectedMovie(movie);
        setOpenModal(true);
        
      };
    //   const handleMovieChange = (newMovie) => {
    //     setMovie(newMovie);
    //   };
    if (!movieData) {
        return <div>Loading</div>
    }
    let url = "http://image.tmdb.org/t/p/w500";

                /*<select className="sortbutton" value={movieYear} onChange={(e) => setMovieYear(e.target.value)}>
  <option value="">Select Year</option>
  {[2000, 2004, 2010].map((year) => (
    <option key={year} value={year}>{year}</option>
  ))}
</select>*/
    return (
        <div className="allcards">

            {movieData.map((movie, i) => (
                <MovieCard
                    imgSrc={url + movie.poster_path}
                    key={i}
                    movieTitle={movie.title}
                    movieRating={movie.vote_average}
                    handleClick={() => handleMovieClick(movie)}
                />
            ))} 
            <button onClick={increment}> Load More</button> 
            
            <MovieModal movie ={selectedMovie} openmodal={openModal} id="moviemodal"/></div>
    );
}

MovieList.propTypes = {

};
export default MovieList;