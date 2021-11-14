import _ from "lodash";
import SubMovieDetails from "../SubDetails/SubMovieDetails";

const SciFi = ({ data, selectedGenre }) => {
  const sciFiGenre = data.filter((c) => c.genre === selectedGenre);
  return (
    <>
      {sciFiGenre.length === 0 ? (
      <p className="badge bg-warning m-2 text-center">There are no movies.</p>
      ) : (
        sciFiGenre.map((c) => (
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

export default SciFi;