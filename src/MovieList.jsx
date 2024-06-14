import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import MovieModal from './MovieModal';

function MovieList({ keyword , movieYear}) {
    const [movieData, setMovieData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(page, keyword, movieYear);
    }, [page, keyword, movieYear]);
    
    const fetchData = async (page, keyword, movieYear) => {
        const apiToken = import.meta.env.VITE_API_TOKEN
        let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
        if (keyword) {
            url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
        }
        else if (movieYear) {
            url ='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1980&sort_by=popularity.desc';
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
        // setMovieData([]);
        // setMovieData([...movieData, ...arrayof]);
        if (keyword) {
            setMovieData(arrayof);
        }
        else{
            setMovieData([...movieData, ...arrayof]);
        }
    };
    function increment() {
        setPage(page + 1);
        console.log({ page })
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
            {movieData.map((movie, i) => (
                <MovieCard
                    imgSrc={url + movie.poster_path}
                    key={i}
                    movieTitle={movie.title}
                    movieRating={movie.vote_average}
                />
            ))} <button onClick={increment}> Load More</button> 
            <MovieModal movie ={movieData[0]} id="moviemodal"/></div>
    );
}

MovieList.propTypes = {

};
export default MovieList;