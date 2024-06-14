import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'
import MovieModal from './MovieModal'


const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
  const [keyword, setKeyword] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1 className="title">Movie Information Display</h1>
      <NavigationBar />
      <SearchBar className="searchbar" onChange={(event) => setKeyword(event.target.value)} setKeyword={setKeyword}/>
      <MovieList /*setKeyword={setKeyword}*/ keyword={keyword}/>
      {/* <MovieModal id="moviemodal"/> */}
      {/* <MovieModal id="moviemodal"/> */}
      


    </div>
  )
}
export default App;