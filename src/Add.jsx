import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ResultCard from "./ResultCard";
export default function Add() {
  const [SerchValue, setSerchValue] = useState("");
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${SerchValue}&apikey=a7ba24b9`)
      .then((response) => {
        if (response.data.Search) {
          console.log(response.data.Search);
          setmovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [SerchValue]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Serch for a movie"
          value={SerchValue}
          onChange={(e) => setSerchValue(e.target.value)}
        ></input>
      </div>
      <div  className="results-list">
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
          ))}
        </ul>
        
      )}
      </div>
    </div>
  );
}
