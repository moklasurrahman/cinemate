import React from 'react'
import notfound from '../Assets/error.jfif'
import './erroer.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Erroe = () => {
  useEffect(() => {
    document.title = `Page Not Found/Cinemate`
  }, [])
  
  return (
    <section>
      <div className="notfound">
        <p>404, Oops!</p>
        <img src={notfound} alt="pageNotfound" />
      </div>

      <div className="btn">
        <Link to="/">
          <button>Back to the home page</button>
        </Link>
      </div>
    </section>
  )
}

export default Erroe