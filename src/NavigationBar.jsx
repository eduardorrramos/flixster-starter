import './NavigationBar.css'
import  { useState } from 'react';

function NavigationBar({keyword, setKeyword, movieYear, setMovieYear}) {
    function handleChange (event) {
        setKeyword(event.target.value);
    }
    return (
        <>
        <div className="container">
        <ul>
        <li><a className="nowplaying" href="default.asp">Now Playing</a></li>
        <li><input className="searchbar" onChange={handleChange} keyword={keyword} type="text" placeholder="Search"></input>
</li>
<li>
    <select className="sortbutton" value={movieYear} onChange={e => setMovieYear(e.target.value)}>
  <option value="">Select Year</option>
  {[1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
   2022, 2023, 2024].map((year) => (
    <option key={year} value={year}>{year}</option>
  ))}
</select></li>
        </ul>
        </div>
        </>  
    );
}
export default NavigationBar;