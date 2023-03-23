import Card from '../components/card/Card'

import './movieList.scss'
import useFetch from './../hooks/useFetch';
import { useEffect } from 'react';




const MovieList = ({apiPath, title}) => {

  useEffect(() => {
    document.title = `${title}/Cinemate`
  })

  
const {data, isLoding, error} = useFetch(`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`)

if (isLoding) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}


  return (
    <main>
      <div className='movies'>

        <div className="title">
          <h3 className='toptitle'>ALL movie ({data.length})</h3>
        </div>

      <div className="movie">
      {data.map((movie, index) => (//'note={note}' going to 'Listitem' derectory.
          <Card key={movie.id} movie={movie}/>
        ))
      }   
      </div>
</div>
    </main>

    

  )
}


export default MovieList