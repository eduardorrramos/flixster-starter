import './SearchBar.css'
import { useState } from 'react'


function SearchBar({fetchWithKeyword}) {
    const [value, setValue] = useState('');

    function handleChange (event) {
        setValue(event.target.value);
        setKeyword('var');
        console.log(event.target.value)
        console.log(keyword)
        // onsubmit(keyword);
        // console.log(keyword)
    }
    function handleClear () {
        setValue('');
        setKeyword('');
    }
    // function getKeyword() {
    //     return keyword;
    // }
    // function handleSearch () {
    //     setKeyword(value);
    //     // console.log({value})
    //     // console.log(keyword)
    //     /*use value and pass this to get tmdb data.json again*/
    // }
    return (
    <>
    {/* /*changed value= value: to keyword*/ }
    <input onChange={handleChange} value={keyword} type="text" placeholder="Search"></input>
    <p>current text value: {keyword}</p>
    {/* <button onClick={handleSearch}>Search</button> */}
    <button onClick={handleClear}>Clear Button</button>
    </>
    )
}
export default SearchBar;
/* search bar, on change call other function that sets movie data
 to the data => lower case and looks for movies that contain keyword
 on change, call function that parses through movieData according to the keyword,
 */
