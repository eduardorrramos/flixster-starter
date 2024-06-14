import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
// import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'
import MovieModal from './MovieModal'


const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
  const [keyword, setKeyword] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [movieYear, setMovieYear] = useState(null);

  return (
    <div className="App">
      <h1 className="title">F l i x t e r</h1>
      <NavigationBar className="searchbar" onChange={(event) => setKeyword(event.target.value)} setKeyword={setKeyword} setMovieYear={setMovieYear}/>
      {/* <SearchBar className="searchbar" onChange={(event) => setKeyword(event.target.value)} setKeyword={setKeyword}/> */}
      <MovieList /*setKeyword={setKeyword}*/ keyword={keyword} movieYear={movieYear} setMovieYear={setMovieYear} />
      {/* <MovieModal id="moviemodal"/> */}
      {/* <MovieModal id="moviemodal"/> */}
      


    </div>
  )
}
export default App;