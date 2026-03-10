import React, { useContext } from "react";
import "../css/Favorites.css";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourite = () => {
  const { favorites } = useContext(MovieContext);

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your favorite</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
           <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No Favourite Movie Yet</h2>
      <p>Start adding movies to your favorite and they will appear her</p>
    </div>
  );
};

export default Favourite;
