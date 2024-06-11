import propTypes from 'prop-types';
import './MovieCard.css'
function MovieCard (props) {
    return (
        <div className="moviecard">
        <h1>{props.movieTitle} </h1>
        <img src={props.imgSrc} />
        <p>{props.movieRating}</p>
    </div>
    )
}
MovieCard.propTypes = {
    movieTitle: propTypes.string.isRequired,
    imgSrc: propTypes.string.isRequired,
    movieRating: propTypes.string.isRequired,
};
export default MovieCard;