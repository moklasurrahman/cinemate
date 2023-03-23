import React, {useContext} from 'react'
import './App.css';
import Routes from './router/index';
import { DarkModeContext } from './context/darkModeContext';

import "./App.css"
import './style/dark.scss'


function App() {
  const {darkMode} = useContext(DarkModeContext);
  
  return (
    <div className={darkMode ? "dark" : "app"}>
        <Routes/>
    </div>
  );
}

// { searchbody ? <SearchIcon style={{'color':'red'
//             }} className='icon'/> : <SearchIcon className='icon'/>}

export default App;
