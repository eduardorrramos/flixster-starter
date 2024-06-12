import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'

const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
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
  return (
    <div className="App">
      <h1>Movie Information Display</h1>
      <NavigationBar />
      <SearchBar />
      <MovieList data={movieData} />
      <button onClick={increment}>Load More</button>
    </div>
  )
}
export default App;