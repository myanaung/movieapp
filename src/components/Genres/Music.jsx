import _ from "lodash";
import SubMovieDetails from "../SubDetails/SubMovieDetails";

const Music = ({ data, selectedGenre }) => {
  const musicGenre = data.filter((c) => c.genre === selectedGenre);
  return (
    <>
      {musicGenre.length === 0 ? (
        <p className="badge bg-warning m-2 text-center">There are no movies.</p>
      ) : (
        musicGenre.map((c) => (
          <SubMovieDetails
            key={c.id}
            medium_cover_image={c.image}
            title_english={c.title}
            year={c.releasedDate}
            id={c.id}
            description_full={c.description}
            url={c.url}
            selectedGenre={selectedGenre}
          />
        ))
      )}
    </>
  );
};

export default Music;