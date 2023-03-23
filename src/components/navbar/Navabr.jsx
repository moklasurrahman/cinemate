import React, { useState, useContext } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ClearIcon from '@mui/icons-material/Clear';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";


import './navbar.scss'

const Navabr = () => {

  const [navitemshow, setnavitem] = useState(false)
  
  
  const [searchbody, setSearchbody] = useState(false)
  
  
  
  // serch kora hosche useNavigate() er maddhome 
  const navigate = useNavigate();
  const handelSubmit = (event) => {
   

    event.preventDefault()
    const queryTerm = event.target.search.value;
    event.target.reset()
    return navigate(`/search?q=${queryTerm}`)

  }
  
  const {darkMode, dispatch} = useContext(DarkModeContext);


  
  return (
    
    <div className='navabrs'>
      <div className="navbar">
        <Link to='/'>
          <div className="logo"><LiveTvIcon className='icon'/>SEEMOVIES</div>
         </Link>
         
          <nav className={`navitem ${navitemshow ? ' showlist' : ''}`}>
            {/* <ul> */}
              <NavLink to='/' className={({ isActive }) => (isActive ? " link-active" : "link")}>
              Home
              </NavLink>
             
              <NavLink to='/movies/popular' className={({ isActive }) => (isActive ? "link-active" : "link")}>
              {/* <li className='navLink'>Popular</li> */}
              Popular
              
              </NavLink>

              <NavLink to='/movies/top' className={({ isActive }) => (isActive ? "link-active" : "link")}>
              {/* <li className='navLink'>Top Rated</li> */}
              Top Rated
              </NavLink>

              <NavLink to='/movies/upcoming' className={({ isActive }) => (isActive ? "link-active" : "link")}>
              {/* <li className='navLink'>Upcoming</li> */}
              Upcoming
              </NavLink>
            {/* </ul> */}
          </nav>


          <div className="search">


          <div className="">
          { darkMode? (<WbSunnyOutlinedIcon style={{color:"yellow"}} className="Nighticon" onClick={()=>dispatch({type:"TOGGLE"})}/>) : 
              (<NightlightRoundIcon className="Nighticon" onClick={()=>dispatch({type:"TOGGLE"})}/>)
            }

          </div>
           
            {/* <NightlightRoundIcon className='Nighticon'/> */}
         
          <form onSubmit={handelSubmit}>
            <span onClick={() => setSearchbody((prev) => !prev)}>
            { searchbody ? <SearchIcon style={{'color':'red'
            }} className='icon'/> : <SearchIcon className='icon'/>}
           </span>
            <input className={`input ${searchbody ? ' inputshow' : ''}`} type="search" name='search'  placeholder="Search the Movie…" />
          </form>

            <div className="manubtn">
              <span onClick={() => setnavitem((prev) => !prev)}>
              {navitemshow ? <ClearIcon className='icon'/> : <FormatAlignRightIcon className='icon'/>}
             </span>  
          </div>


          </div>


      </div>


      
    </div>
  )
}

export default Navabr