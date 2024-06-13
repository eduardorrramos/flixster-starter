import propTypes from 'prop-types';
import './MovieCard.css'
import openmodal from './MovieModal'

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

function MovieCard (props) {
    return (
        <div className="moviecard" onClick={() => openmodal(props)}>
        <img className="movieimage" src={props.imgSrc} />
        <h4 className="movietitle">{props.movieTitle} </h4>
        <p className="movierating">{props.movieRating}</p>
    </div>
    )
}
MovieCard.propTypes = {
    // key:propTypes.number.isRequired,
    imgSrc: propTypes.string.isRequired,
    movieTitle: propTypes.string.isRequired,
    movieRating: propTypes.number.isRequired,
};
export default MovieCard;