import './MovieModal.css'
var moviemodal = document.getElementById("moviemodal");
import './MovieList.jsx'

function MovieModal(movie) {
    moviemodal.innerHTML = 
    `<div class="playlist">
    <img src="${movie.imgSrc}" alt="Song cover art" class="playlistimage">
    <div class="playlistinfo">
    <h3 class="songtitle">${movie.movieTitle}</h3>
    <p class="songartist">${movie.movieRating}</p>
    </div>
</div>`;
moviemodal.style.display="block";
    // arrayofsongs.forEach(populate);
}
export default MovieModal;