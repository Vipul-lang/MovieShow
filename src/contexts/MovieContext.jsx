import { createContext, useState } from "react";


export const MovieContext = createContext();


export const MovieProvider=({children})=>
{
    const [favorites,setFavorite]=useState([])

    const addFavorites=(movie)=>{
        setFavorite([...favorites,movie])
    }


    return(
        <MovieContext.Provider value={{addFavorites,favorites}}>

        {children}

        </MovieContext.Provider>
    )
}