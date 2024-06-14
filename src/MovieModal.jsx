import './MovieModal.css'
import { useState, useEffect } from 'react'

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
     const [isModal, setIsModal] = useState(false);
    function closemodal () {
        setIsModal(!isModal);
    }
    return (
        <div className="playlist" style={{ display: isModal ? 'block' : 'none' }}>
          <img src={"http://image.tmdb.org/t/p/w500/" + actualmoviedata.poster_path} alt="Song cover art" className="playlistimage" />
          <div className="playlistinfo">
            <h3 className="songtitle">{actualmoviedata.original_title}</h3>
            <p className="songartist">{actualmoviedata.release_date}</p>
            <button onClick={closemodal} ></button>
          </div>
        </div>
      );
}
export default MovieModal;

