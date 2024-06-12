import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'


const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
  
  return (
    <div className="App">
      <h1>Movie Information Display</h1>
      <NavigationBar />
      {/* <SearchBar /> */}
      <MovieList /*data={movieData}*//>
    </div>
  )
}
export default App;