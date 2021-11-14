import React from "react";
import { useParams } from "react-router";
import SubMovieDetails from "./SubDetails/SubMovieDetails";

const MovieDetails = ({ data }) => {
  let { id } = useParams();
  let clickedMovie = data.filter((m) => m.id == id);

  //medium_cover_image , title_english , year , id , description_full , url

  return (
    <>
      {clickedMovie.map((m) => (
        <SubMovieDetails
          key={m.id}
          medium_cover_image={m.medium_cover_image}
          title_english={m.title_english}
          year ={m.year}
          id={m.id}
          description_full ={m.description_full}
          url={m.url}
        />
      ))}
    </>
  );
};

export default MovieDetails;
