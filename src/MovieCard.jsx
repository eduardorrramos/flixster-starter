import propTypes from 'prop-types';
import './MovieCard.css'
import openmodal from './MovieModal'
import { useState, useEffect } from 'react'
import MovieList from './MovieList';
// function openmodal(movie) {
//     console.log(movie.movieTitle)

//     let oneplaylist= playlistdatajson[oneplaylistid];
//     let arrayofsongs= oneplaylist.songs;
//     modal_content.innerHTML = ""
//     modal_content.innerHTML +=
//     `<div class="playlist">
//     <img src="${oneplaylist.playlist_art}" alt="Song cover art" class="playlistimage">
//     <div class="playlistinfo">
//     <h3 class="songtitle">${oneplaylist.playlist_name}</h3>
//     <p class="songartist">${oneplaylist.playlist_creator}</p>
//     </div>
// </div>`;
//     arrayofsongs.forEach(populate);
function MovieCard ({ imgSrc, movieTitle, movieRating, handleClick}) {
    return (
        <div className="moviecard" onClick={handleClick}>
        <img className="movieimage" src={imgSrc} />
        <h4 className="movietitle">{movieTitle} </h4>
        <p className="movierating"> {movieRating} 🌟 </p>
    </div>
    )
}
MovieCard.propTypes = {
    imgSrc: propTypes.string.isRequired,
    movieTitle: propTypes.string.isRequired,
    movieRating: propTypes.number.isRequired,
    // handleClick: propTypes.func.isRequired,
};
export default MovieCard;