import React from 'react'
import Card from '../components/card/Card'
import '../App.css'
import './movieList.scss'
import useFetch from './../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import './search.scss'


// 'apoPath' comming from router
const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams() //unique query collection
  const queryTerm = searchParams.get('q')

  useEffect(() => {
    document.title = `Search result for ${queryTerm }/Cinemate`
  })
  



  const {data, isLoding, error} = useFetch(`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`)


  if (isLoding) {
    return <div className='loader'></div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <main>
      <div className='movie'>

        <div className="title">
          <h3 className='toptitle'>
            {data.length === 0 ? `No result found for '${queryTerm} 😞🙎‍♂️'` : `Your Serch result : '${queryTerm}' 🎬`}
          </h3>
        </div>

    <div className='serchCard'>
    {data.map((movie, index) => (//'movi={movi}' going to 'card' derectory.
          <Card key={movie.id} movie={movie}/>
        ))
      }

    </div>

</div>
    </main>

    

  )
}

export default Search