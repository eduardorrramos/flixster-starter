import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'

// import requests
// api_key = 'ab418bdf6d93c36a6816d0ab81c2ec63'

function MovieList({ /*setKeyword,*/ keyword }) {
    const [movieData, setMovieData] = useState([]);
    const [page, setPage] = useState(1);
    // const [keyword, setKeyword] = useState('')
    // console.log(keyword)
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
        console.log(arrayof)
        // setMovieData([]);
        // setMovieData([...movieData, ...arrayof]);
        if (keyword) {
            setMovieData([arrayof]);
        }
        else{
            setMovieData([...movieData, ...arrayof]);

        }


    };

    function increment() {
        setPage(page + 1);
        console.log({ page })
    };
    // console.log('keyword', keyword1);

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
                    // key={movie.id}
                    imgSrc={url + movie.poster_path}
                    key={i}
                    movieTitle={movie.title}
                    movieRating={movie.vote_average}
                />
            ))} <button onClick={increment}> Load More</button> </div>
    );

}

MovieList.propTypes = {

};
export default MovieList;