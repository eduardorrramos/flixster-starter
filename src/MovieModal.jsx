import './MovieModal.css'

function MovieModal(movie) {
    // console.log(movie)
    console.log(movie)
    movie = {
        "poster_path": "ffefawf",
        "original_title": "heyyy",
        "release_date": "geges"
      };
    return (
        <div className="playlist">
          <img src={movie.poster_path} alt="Song cover art" className="playlistimage" />
          <div className="playlistinfo">
            <h3 className="songtitle">{movie.original_title}</h3>
            <p className="songartist">{movie.release_date}</p>
            
          </div>
        </div>
      );
}
export default MovieModal;

