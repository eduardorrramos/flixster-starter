import './MovieModal.css'
import { useState, useEffect } from 'react'

function MovieModal(props) {
    console.log(props)
    // console.log(movie)
    // console.log(movie)
    // movie = {
    //     "poster_path": "ffefawf",
    //     "original_title": "heyyy",
    //     "release_date": "geges"
    //   };
    // let actualmoviedata = props.movie.movie;
    console.log(props.movie)
    // console.log(actualmoviedata)

    // const [isModal, setIsModal] = useState(true);
    // function closemodal () {
    //     setIsModal(!isModal);
    // }
 
    return (
        <div className="playlist" style={{ display: props.openmodal ? 'block' : 'none' }}>
           <img src={"http://image.tmdb.org/t/p/w500/" + props.movie.poster_path} alt="Song cover art" className="playlistimage" /> 
          <div className="playlistinfo">
            <h3 className="songtitle">{props.movie.original_title}</h3> 
            <p className="songartist">{props.movie.release_date}</p> 
            <p className="songartist">{props.movie.overview}</p> 

            {/* <button onClick={props.setOpenModal} ></button> */}
            <button className="closebutton" onClick={() => props.setOpenModal(false)} >Close</button>
          </div>
        </div>
      );

};
export default MovieModal;

