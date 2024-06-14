import './NavigationBar.css'
import  { useState } from 'react';

function NavigationBar({keyword, setKeyword}) {

    function handleChange (event) {
        setKeyword(event.target.value);
    }
    function handleClear () {
        setKeyword('');
    }
    const [movieYear, setMovieYear] = useState('');

    return (
        <>
        <div className="container">
        <ul>
        <li><a className="nowplaying" href="default.asp">Now Playing</a></li>
        <li><input className="searchbar" onChange={handleChange} keyword={keyword} type="text" placeholder="Search"></input>
</li>
<li><select className="sortbutton" value={movieYear} onChange={e => setMovieYear(e.target.value)}>
  <option value="">Select Year</option>
  {[2000, 2004, 2010].map((year) => (
    <option key={year} value={year}>{year}</option>
  ))}
</select></li>
        </ul>
        </div>
        </>
        
       
    );
}
export default NavigationBar;