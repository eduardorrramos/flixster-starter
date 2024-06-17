import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import MovieModal from './MovieModal';

function MovieList({movieData, increment}) {
    const [selectedMovie, setSelectedMovie] = useState('');
    const [openModal, setOpenModal] = useState(false)
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setOpenModal(!openModal);
      };
    if (!movieData) {
        return <div>Loading</div>
    }
    let url = "http://image.tmdb.org/t/p/w500";

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
            
            <MovieModal movie={selectedMovie} openmodal={openModal} setOpenModal={setOpenModal} id="moviemodal"/></div>
    );
}

MovieList.propTypes = {

};
export default MovieList;