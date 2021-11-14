const SubMovieDetails = ({medium_cover_image , title_english , year , id , description_full , url , selectedGenre}) => {
  return (<>
    <h4 className="genreTitle">{selectedGenre}</h4>
    <div key={id} className="details-container">
      <img src={medium_cover_image} alt="" />
      <div className="movie-details">
        <h5 className="m-2">{title_english}</h5>
        <p className="text-warning">Released Year - {year}</p>
        <p>{description_full}</p>
        <a className="download-btn" href={url}>
          Download
        </a>
      </div>
    </div>
    </>
  );
};

export default SubMovieDetails;
