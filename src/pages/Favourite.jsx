import React, { useContext } from "react";
import "../css/Favorites.css";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourite = () => {
  const { favorites } = useContext(MovieContext);
  return (
  <>
    {favorites.length === 0 ? (
      <div className="favourites">
        <h2>No Favourite Movie Yet</h2>
        <p>Start adding movies to your favorite and they will appear here</p>
      </div>
    ) : (
      <div className="favorites">
        <h2>Your favorite</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )}
  </>
);
};

export default Favourite;
