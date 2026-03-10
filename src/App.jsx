import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favourite from "./pages/Favourite";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";



function App() {
  return (
   <MovieProvider>
      <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favourites" element={<Favourite/>} />
      </Routes>
    </main>
   </MovieProvider>
   
  );
}

export default App;
