import './MovieList.css';
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard'

// import requests
// api_key = 'ab418bdf6d93c36a6816d0ab81c2ec63'

function MovieList ({data}) {
    const [movieData, setMovieData] = useState(null)
    const [page, setPageNumber] = useState(1)

    const fetchData = async () => {
    const apiToken = import.meta.env.VITE_API_TOKEN
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiToken}`
        }
      })
    const readabledata = await response.json()
    console.log(readabledata);
    setMovieData(readabledata);
  };
// oneffect( , [page]);

async function increment() {
    setPageNumber(page+1);
    console.log(page)
};

  useEffect(() => {
    
      fetchData();
    
  }, []);

  const handleMovieChange = (newMovie) => {
    setMovie(newMovie);
  };
  if (!movieData) {
    return <div>Loading</div>
  }





    let moviearray = (data.results);
    // console.log(moviearray);
    let url = "http://image.tmdb.org/t/p/w500";
            return (

moviearray.map((movie) => (
            <> {
            <MovieCard
            // key={movie.id}
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