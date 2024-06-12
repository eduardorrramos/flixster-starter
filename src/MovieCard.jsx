import propTypes from 'prop-types';
import './MovieCard.css'
function MovieCard (props) {
    return (
        <div className="moviecard">
        {/* <p>{props.id}</p> */}
        <h1>{props.movieTitle} </h1>
        <img className="movieimage" src={props.imgSrc} />
        <p>{props.movieRating}</p>
    </div>
    )
}
MovieCard.propTypes = {
    // key:propTypes.number.isRequired,
    movieTitle: propTypes.string.isRequired,
    imgSrc: propTypes.string.isRequired,
    movieRating: propTypes.number.isRequired,
};
export default MovieCard;