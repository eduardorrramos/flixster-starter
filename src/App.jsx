import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'
import MovieModal from './MovieModal'


const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
  
  return (
    <div className="App">
      <h1>Movie Information Display</h1>
      <NavigationBar />
      {/* <SearchBar /> */}
      <MovieList/>
      {/* <MovieModal id="moviemodal"/> */}
    </div>
  )
}
export default App;