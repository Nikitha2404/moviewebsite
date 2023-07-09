import React from 'react'
import { useParams,NavLink } from 'react-router-dom'
import { API_URL } from './context';
import { useState,useEffect } from 'react';

const Singlemovie = () => {
  const {id}=useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMoview] =useState([]);

  const getMovies=async(url)=>{
      setIsLoading(true);
      try{
          const res=await fetch(url);
          const data=await res.json();
          console.log(data);
          if(data.Response === "True"){
              setIsLoading(false);
              setMoview(data);
          }
      }catch(error){
          console.log("Error getting movies")
      }
  };

  useEffect(()=>{
      let timerout = setTimeout(()=>{
          getMovies(`${API_URL}&i=${id}`);
      },800);
      return ()=>clearTimeout(timerout);
  },[id])

  if(isLoading){
    return (
      <div className='movie-section'>
        <div className='loading'>
            Loading...
        </div>

      </div>
    )
  }
  return (
    <>
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt={movie.Title}/>
          </figure>
          <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          </div>
        </div>

      </section>
    </>
  )
}

export default Singlemovie