import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import './App.css';

const apiUrl = "http://www.omdbapi.com/?apikey=b9dda53d"

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }


  useEffect(function(){
      searchMovies('Spiderman');

  }, [])


  return(
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          />
        <button onClick={() => searchMovies(search)}>Search</button>
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) =>(
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;