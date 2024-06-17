import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import NavigationBar from './NavigationBar'
import MovieModal from './MovieModal'


const App = () => {
  // const [movie, setMovie] = useState('Random Movie')
  const [keyword, setKeyword] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState(false);
/* handles load more button for keyword */
    function increment() {
      setPage(page + 1);
      console.log({ page })
  };
/* handles filter by year selected */
  function handleYearSelection (event) {
    setMovieYear(event);
  };
  useEffect(() => {
    fetchData(page, keyword, movieYear, searched);
  }, [page, keyword, movieYear, searched]);
/* fetch data, filter components by whether keyword, movie year, or none is provided */
    const fetchData = async (page, keyword, movieYear) => {
        const apiToken = import.meta.env.VITE_API_TOKEN
        let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
        if (keyword) {
            if (page == 1){
                setPage(1);
                setSearched(true);
                url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
            }
            else {
                // setPage(page + 1);
                url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`;
            }
        }
        else if (movieYear) {
            if (page == 1){
                setPage(1);
                setSearched(true);
                url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${movieYear}&sort_by=popularity.desc&include_adult=false&language=en-US&page=${page}`;
            }
            else {
                // setPage(page + 1);
                url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${movieYear}&sort_by=popularity.desc&include_adult=false&language=en-US&page=${page}`;
            }
        }
        else {
            if (page == 1){
                setPage(1);
                setSearched(true);
                url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
            }
            else {
                // setPage(page + 1);
                url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
            }
        }
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiToken}`
                }
            });
        const readabledata = await response.json()
        const arrayof = readabledata.results;
        if (keyword) {
            setMovieData(arrayof);
            console.log("idontwork")
        }
        else if (movieYear) {
            setMovieData(arrayof);
            console.log("ihatethis")
        }
        else{
            setMovieData([...movieData, ...arrayof]);
        }
    };
/* returns components of application to user display */
  return (
    <div className="App">
      <header className="header"><h1>F l i x t e r</h1>
     <p className="headerparagraph"> d                awdf  </p> </header>
      <h1 className="title"></h1>
      <NavigationBar 
        className="searchbar" 
        onChange={(event) => setKeyword(event.target.value)}
        setKeyword={setKeyword}
        setMovieYear={handleYearSelection}
        movieYear={movieYear}
       />
      <MovieList increment={increment} movieData={movieData}/>
      <footer className="footerpage">
      <p><a className="emailfoot" href="eduardoramos@meta.com">eduardoramos@meta.com</a></p>
      <p>Developed by Eduardo Ramos</p>
</footer>
    </div>
  )
}
export default App;