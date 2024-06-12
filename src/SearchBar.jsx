import './SearchBar.css'
import { useState } from 'react'


function SearchBar() {
    const [value, setValue] = useState('');

    function handleChange (event) {
        setValue(event.target.value);
    }
    function handleClear () {
        setValue('');
    }
    function handleSearch () {
        {value}
        /*use value and pass this to get tmdb data.json again*/
        
    }



    return (
    <>
    <input onChange={handleChange} value={value} type="text" placeholder="Search"></input>
    <p>current text value: {value}</p>
    <button onClick={handleSearch}>Search</button>
    <button onClick={handleClear}>Clear Button</button>
    </>

    )
}
export default SearchBar;