import { Link } from "react-router-dom";

const MoviesPaginate = ({ data }) => {
  return (
    <div className="movies-item">
      {data.map((movie) => (
        <div key={movie.id} className="movie-item">
          <Link to={`/${movie.id}`}>
            <img className="image" src={movie.medium_cover_image} alt="" />
          </Link>
          <div className="title">{movie.title_english}</div>
        </div>
      ))}
    </div>
  );
};


export default MoviesPaginate;
