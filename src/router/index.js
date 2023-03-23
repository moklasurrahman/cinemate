import Erroer from './Erroer';
import { BrowserRouter, Routes,Route, } from "react-router-dom";
// import Home from './../pages/Home';
import MovieDetail from './../pages/MovieDetail';
import MovieList from './../pages/MovieList';
import Search from './../pages/Search';
import Navabr from './../components/navbar/Navabr';
import Footer from './../components/footer/Footer';

const Index = () => {
  return (

    <div>
    <BrowserRouter>
        <Navabr/>
       
       <Routes>
        
            <Route exact path='/' element={<MovieList apiPath="movie/now_playing" title='home' />}/>
            <Route path='/movie/:id' element={<MovieDetail/>}/>
            <Route path='/movies/popular' element={<MovieList apiPath="movie/popular" title='popular' />}/>
            <Route path='/movies/top' element={<MovieList apiPath="movie/top_rated" title='Top Rated' />}/>
            <Route path='/movies/upcoming' element={<MovieList apiPath="movie/upcoming" title='Upcoming' />}/>
            <Route path='/search' element={<Search apiPath="search/movie"/>}/>
            <Route path='*' element={<Erroer/>}/>
       
        </Routes>
       
        <Footer/>
  </BrowserRouter>
    </div>
  )
}

export default Index