import React from "react";
import MoviesPaginate from "./MoviesPaginate";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";

// https://yts.mx/api/v2/list_movies.json
const Movies = ({
  handleSearch,
  handlePageChange,
  paginatedMovies,
  searchedMovies,
  pageSize,
  currentPage,
}) => {
  return (
    <div className="movies-container">
      <form className="d-flex search-container">
        <SearchBox onClick={handleSearch} />
      </form>
      <MoviesPaginate data={paginatedMovies} />
      <Pagination
        itemsCount={searchedMovies.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Movies;
