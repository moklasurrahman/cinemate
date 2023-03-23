import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
// import errorImg from '../Assets/error.jfif'
// import useFetch from '../hooks/useFetch'

import './movieDetail.scss'
import errorImg from '../Assets/error.jfif'
import StarIcon from '@mui/icons-material/Star';

const MovieDetail = () => {

const [movie, setMovie] = useState({})
const img = movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : errorImg;
  
const params = useParams()
  useEffect(() => {
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=489e18f37331a2e0dfdad9e001bb8a6a`);
      const json = await response.json()
      setMovie(json);
    }
    fetchMovie();
  }, [params.id]);
  

  useEffect(() => {
    document.title = `${movie.title}/Cinemate`
  })

  return (
    <section className='movieDetail'>
      <div className="left">
        <div className="img">
          <img src={img} alt={movie.title} />
        </div>
      </div>
      
      <div className="right">
        <div className="allitem">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          {movie.genres ? (
            <div className="btn">
               {movie.genres.map((genre) =>(
              <span key={genre.id}>{genre.name}</span>
            ))}
            </div>
            
          ) : ""}

          {/* <div className="btn">
            <span>Adventure</span>
            <span>Fantasy</span>
            <span>Science Fiction</span>
          </div> */}


          <div className="moreinfo">
              <p><StarIcon className='icon'/> {movie.vote_average}. {movie.vote_count} reviews</p>
              <p><strong>Runtime: </strong> {movie.runtime} min.</p>
              <p><strong>budget: </strong>{movie.budget}</p>
              <p><strong>Release Date: </strong> {movie.release_date}</p>
              <p href=""><strong>imdb code: </strong><a href={`https://www.imbd.com/title/${movie.imdb_id}`} rel='nothing'>{movie.imdb_id}</a></p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetail