import React, { useEffect, useState } from "react";
import Movie from "./components/Movie.js";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchMovies, setSearchMovies ] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, [])

  const handleOnSubmit = event => {
    event.preventDefault();

    if(searchMovies){
      getMovies(SEARCH_API + searchMovies);
      setSearchMovies('');
    }
  }

  const handleOnChange = event => {
    setSearchMovies(event.target.value);
  }

  const getMovies = API => {
    fetch(API)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
        })
  }

  return (
    <div>
      <header>
        <h3>Movies Finder</h3>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search" 
            type="search" 
            placeholder="Search..."
            value={searchMovies} 
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="App">
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
