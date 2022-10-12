import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import * as Bs from 'react-icons/bs';
import './styles.css'
import MovieCard from '../../components/movieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const {id} = useParams();
  const [ movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const response = await fetch(url)
    const data = await response.json();

    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US",{
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <div className='movie-page'>
      {movie && <>
        <MovieCard movie={movie} showLink={false}/>
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <Bs.BsWallet /> Orçamento:
            <p>{formatCurrency(movie.budget)}</p>
          </h3>
        </div>
        <div className="info">
          <h3>
            <Bs.BsGraphUp /> Receita:
            <p>{formatCurrency(movie.revenue)}</p>
          </h3>
        </div>
        <div className="info">
          <h3>
            <Bs.BsHourglassSplit /> Duração:
            <p>{movie.runtime}</p>
          </h3>
        </div>
        <div className="info-description">
          <h3>
            <Bs.BsFillFileEarmarkTextFill/> Descrição:
            <p>{movie.overview}</p>
          </h3>
        </div>
      </>}
    </div>
  )
}

export default Movie