import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'

const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
  const [movieData, setMovieData] = useState(null)


  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const apiToken = import.meta.env.VITE_API_TOKEN
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiToken}`
        }
      })
      console.log("eres",response)
    const readabledata = await response.json()
    setMovieData(readabledata);
  };
  console.log(movieData)

  useEffect(() => {
    
      fetchData();
    
  }, []);

  console.log("App moviedata",movieData)

  const handleMovieChange = (newMovie) => {
    setMovie(newMovie);
  };

  if (!movieData) {
    return <div>Loading</div>
  }

  return (
    <div className="App">
      <h1>Movie Information Display</h1>
      <NavigationBar />
      <SearchBar />
      <MovieList data={movieData} />
    </div>
  )
}

export default App