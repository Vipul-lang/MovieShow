import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    // way 1 
  const [favorites, setFavorites] = useState(() => {
    const storedFavs = localStorage.getItem("favorites");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  // way 2 

//   const getInitialFavorites = () => {
//   const storedFavs = localStorage.getItem("favorites");
//   return storedFavs ? JSON.parse(storedFavs) : [];
// };
// const [favorites, setFavorites] = useState(getInitialFavorites);

  const addFavorites = (movie) => {
    const isExist = favorites.some((fav) => fav.id === movie.id);

    if (isExist) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };
  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // useEffect(() => {
  //   const storedFavs = localStorage.getItem("favorites");

  //   if (storedFavs) setFavorites(JSON.parse(storedFavs));
  // }, []);

  return (
    <MovieContext.Provider value={{ addFavorites, favorites }}>
      {children}
    </MovieContext.Provider>
  );
};
