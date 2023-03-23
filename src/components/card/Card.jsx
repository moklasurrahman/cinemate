import React from 'react'
import { Link } from 'react-router-dom';

import errorImg from '../../Assets/error.jfif'


import './card.scss'

const Card = ({movie}) => {

  const {id, poster_path } = movie
    const img = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : errorImg ;
  
  
    
// desc sort banano hoice
const getDesc = (desc) =>{
  const count = movie.overview.split('\n')[0]
  if(count.length > 50){
    return desc.slice(0, 100)+'........................................'
  }
  return desc
}



    return (
    
    <section className="cardSection">
    
        <div data-aos="fade-up" className="itemCont">
         
          <div className="item">
          <Link to={`/movie/${id}`}>
            <div className="image">
              <img src={img} alt="" />
            </div>
            </Link>
            <div className="cardInfocont">
              <div className="info">
                
                <div className="cardTitle">
                  <h3>{movie.original_title}</h3>
                </div>
                <hr />
                <div className="cardDesc">
                  <p>{getDesc(movie.overview)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
    
  )
}

export default Card