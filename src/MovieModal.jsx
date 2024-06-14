import './MovieModal.css'

function MovieModal(movie) {
    // console.log(movie)
    return (
        <div className="playlist">
          <img src={`${movie.poster_path}`} alt="Song cover art" className="playlistimage" />
          <div className="playlistinfo">
            <h3 className="songtitle">{movie.title}</h3>
            <p className="songartist">{movie.vote_average}</p>
          </div>
        </div>
      );
}
export default MovieModal;

