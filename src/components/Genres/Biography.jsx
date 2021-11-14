import _ from "lodash";
import SubMovieDetails from "../SubDetails/SubMovieDetails";

const Biography = ({ data, selectedGenre }) => {
  const biographyGenre = data.filter((c) => c.genre === selectedGenre);
  return (
    <>
      {biographyGenre.length === 0 ? (
        <p className="badge bg-warning m-2 text-center">There are no movies.</p>
      ) : (
        biographyGenre.map((c) => (
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

export default Biography;