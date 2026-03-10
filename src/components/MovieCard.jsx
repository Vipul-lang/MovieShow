import React, { useContext } from 'react'
import '../css/MovieCard.css'
import { MovieContext } from '../contexts/MovieContext'



const MovieCard = ({movie}) => {
 
  const {addFavorites}=useContext(MovieContext)

 

  return (
    <div className='movie-card'>
        <div className='movie-poster'>
             <img src={movie.poster} alt={movie.name}/>
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={()=>addFavorites(movie)}>
                    🤍
                </button>
            </div>
        </div>
      <div className='movie-info'>  
        <h3>{movie.name}</h3>
        <p>{movie.year}</p>

      </div>
    </div>
    
  )
}

export default MovieCard
