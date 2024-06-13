import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'
import MovieModal from './MovieModal'

// fetch function
// url for search query etc
// make fetch, get response, save response (list of movies)
const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
  const [keyword, setKeyword] = useState('')
  
  return (
    <div className="App">
      <h1>Movie Information Display</h1>
      <NavigationBar />
      <SearchBar onSubmit={setKeyword}/>
      <MovieList keyword={keyword} />
      {/* <MovieModal id="moviemodal"/> */}
    </div>
  )
}
export default App;