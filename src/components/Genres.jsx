import { Link } from "react-router-dom";

const Genres = ({ data , onItemSelect , selectedItem }) => {
  return (
    <>
      {data.map((genre) => (
        <li key={genre} className="genresList">
          <Link className={genre === selectedItem ? "dropdown-item select" : "dropdown-item"} to={`/${genre.toLowerCase()}`} onClick={() => onItemSelect(genre)}>
            {genre}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Genres;
