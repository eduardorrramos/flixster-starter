import './SearchBar.css'

function SearchBar({keyword, setKeyword}) {
    // const [keyword, setKeyword] = useState('');
    function handleChange (event) {
        setKeyword(event.target.value);
    }
    function handleClear () {
        setKeyword('');
    }
    // function handleSearch () {
    //     setKeyword(value);
    //     console.log({value})
    //     console.log(keyword)
    //     /*use value and pass this to get tmdb data.json again*/
        
    // }
    return (
    <>
    <input onChange={handleChange} keyword={keyword} type="text" placeholder="Search"></input>
    {/* <p>current text keyword: {keyword}</p> */}
    {/* <button onClick={handleSearch}>Search</button> */}
    <button className="clearbutton" onClick={handleClear}>Clear Button</button>
    </>
    )
}
export default SearchBar;

/* search bar, on change call other function that sets movie data
 to the data => lower case and looks for movies that contain keyword
 on change, call function that parses through movieData according to the keyword,
 
 */