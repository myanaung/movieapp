import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import axios from "axios";
import { paginate } from "./utils/paginate";
import _ from "lodash";
import Crime from "./components/Genres/Crime";
import Comedy from './components/Genres/Comedy';
import Action from './components/Genres/Action';
import Drama from './components/Genres/Drama';
import Fantasy from './components/Genres/Fantasy';
import Horror from "./components/Genres/Horror";
import Adventure from './components/Genres/Adventure';
import SciFi from "./components/Genres/SciFi";
import Documentary from './components/Genres/Documentary';
import Romance from "./components/Genres/Romance";
import Mystery from "./components/Genres/Mystery";
import Music from "./components/Genres/Music";
import Biography from './components/Genres/Biography';
import Western from "./components/Genres/Western";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [genreDetails, setGenreDetails] = useState([
    {
      title: "",
      genre: "",
      image: "",
      description: "",
      releasedDate: "",
      url : "",
      id : ""
    },
  ]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(
        "https://yts.mx/api/v2/list_movies.json"
      );
      setMovies(data.data.movies);
      //Genre Name
      const genresArr = data.data.movies.map((item) => item.genres);
      const firstFun = _.flatten(genresArr);
      const secondFun = _.union(firstFun);
      setGenres(secondFun);
      //Genre Details
      const detailPage = data.data.movies.map((item) => ({
        title: item.title_english,
        genre: item.genres[0],
        image: item.medium_cover_image,
        description: item.description_full,
        url : item.url,
        releasedDate: item.year,
        id : item.id,
      }));
      setGenreDetails(detailPage);
    };
    getMovies();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  if (movies.length === 0) return null;

  let searchedMovies = movies;

  searchedMovies = searchQuery
    ? movies.filter((m) =>
        m.title_english.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    : movies;

  const paginatedMovies = paginate(searchedMovies, currentPage, pageSize);

  return (
    <main className="container">
      <NavBar
        data={genres}
        onItemSelect={handleGenreSelect}
        selectedItem={selectedGenre}
      />
      <Routes>
        <Route
          path="//*"
          element={
            <Movies
              handleSearch={handleSearch}
              handlePageChange={handlePageChange}
              paginatedMovies={paginatedMovies}
              searchedMovies={searchedMovies}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/:id" element={<MovieDetails data={movies} />} />
        <Route
          path="/crime"
          element={<Crime data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/comedy"
          element={<Comedy data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/action"
          element={<Action data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/drama"
          element={<Drama data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/fantasy"
          element={<Fantasy data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/horror"
          element={<Horror data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/adventure"
          element={<Adventure data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/sci-fi"
          element={<SciFi data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/documentary"
          element={<Documentary data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/romance"
          element={<Romance data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/mystery"
          element={<Mystery data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/music"
          element={<Music data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/biography"
          element={<Biography data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/western"
          element={<Western data={genreDetails} selectedGenre={selectedGenre}/>}
        />
        <Route
          path="/thriller"
          element={<Western data={genreDetails} selectedGenre={selectedGenre}/>}
        />
      </Routes>
    </main>
  );
};

export default App;
