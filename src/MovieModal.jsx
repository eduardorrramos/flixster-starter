import './MovieModal.css'
var moviemodal = document.getElementById("moviemodal");
console.log(moviemodal)
import './MovieList.jsx'

function MovieModal(movie) {
    console.log(movie)
    moviemodal.innerHTML = 
    `<div class="playlist">
    <img src="${movie.movieTitle}" alt="Song cover art" class="playlistimage">
    <div class="playlistinfo">
    <h3 class="songtitle">${movie.movieTitle}</h3>
    <p class="songartist">${movie.movieTitle}</p>
    </div>
</div>`;
moviemodal.style.display="block";
    // arrayofsongs.forEach(populate);
}
export default MovieModal;
