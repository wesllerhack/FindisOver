import React from 'react'
import { Link } from 'react-router-dom'
import * as Fa from 'react-icons/fa'
import './styles.css'

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className='movie-card'>
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <Fa.FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        
    </div>
  )
}

export default MovieCard