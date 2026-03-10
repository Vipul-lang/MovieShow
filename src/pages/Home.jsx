import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
// import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([
{ id:1, name:"Doctor Strange", year:2016, poster:"https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", rating:7.5, genre:"Superhero"},
{ id:2, name:"The Dark Knight", year:2008, poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating:9.0, genre:"Action"},
{ id:3, name:"Interstellar", year:2014, poster:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", rating:8.7, genre:"Sci-Fi"},
{ id:4, name:"Titanic", year:1997, poster:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", rating:7.9, genre:"Romance"},
{ id:5, name:"Avengers: Endgame", year:2019, poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", rating:8.4, genre:"Superhero"},
{ id:6, name:"Joker", year:2019, poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating:8.5, genre:"Drama"},
{ id:7, name:"Spider-Man: No Way Home", year:2021, poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", rating:8.3, genre:"Superhero"},
{ id:8, name:"Dune", year:2021, poster:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", rating:8.0, genre:"Sci-Fi"},
{ id:9, name:"Top Gun: Maverick", year:2022, poster:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", rating:8.4, genre:"Action"},
{ id:10, name:"Oppenheimer", year:2023, poster:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", rating:8.6, genre:"Biography"},

{ id:11, name:"The Matrix", year:1999, poster:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", rating:8.7, genre:"Sci-Fi"},
{ id:12, name:"Gladiator", year:2000, poster:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", rating:8.5, genre:"Action"},
{ id:13, name:"Fight Club", year:1999, poster:"https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", rating:8.8, genre:"Drama"},
{ id:14, name:"Forrest Gump", year:1994, poster:"https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", rating:8.8, genre:"Drama"},
{ id:15, name:"The Shawshank Redemption", year:1994, poster:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", rating:9.3, genre:"Drama"},
{ id:16, name:"The Godfather", year:1972, poster:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", rating:9.2, genre:"Crime"},
{ id:17, name:"Black Panther", year:2018, poster:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", rating:7.3, genre:"Superhero"},
{ id:18, name:"Iron Man", year:2008, poster:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", rating:7.9, genre:"Superhero"},
{ id:19, name:"Thor: Ragnarok", year:2017, poster:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", rating:7.9, genre:"Superhero"},




  ]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function loadPopularMovies() {
  //     const res = await fetch("http://localhost:3000/movies");
  //     const popularMovies = await res.json();
  //     setMovies(popularMovies);
  //   }

  //   loadPopularMovies();
  // }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchResults = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );
    setMovies(searchResults);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/*  {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )} */}

      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Home;
