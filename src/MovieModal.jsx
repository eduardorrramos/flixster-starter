import './MovieModal.css'

function MovieModal(movie) {
    // console.log(movie)
    // console.log(movie)
    // movie = {
    //     "poster_path": "ffefawf",
    //     "original_title": "heyyy",
    //     "release_date": "geges"
    //   };
    console.log(movie)
    let actualmoviedata = movie.movie;
    
    return (
        <div className="playlist">
          <img src={actualmoviedata.poster_path} alt="Song cover art" className="playlistimage" />
          <div className="playlistinfo">
            <h3 className="songtitle">{actualmoviedata.original_title}</h3>
            <p className="songartist">{actualmoviedata.release_date}</p>
            
          </div>
        </div>
      );
}
export default MovieModal;

