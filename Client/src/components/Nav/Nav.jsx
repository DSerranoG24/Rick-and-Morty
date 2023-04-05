import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {Link, useLocation} from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav({onSearch}) {
  let {pathname}= useLocation()
  if(pathname !== "/"){return (
    <div className={style.container}>
      <div className={style.containerCards}>
        <div>
          <Link to="/about">
            <button about={style.button}>About</button>
          </Link>
        </div>
        <div>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to="/favorite">
            <button>Favorites</button>
          </Link>
        </div>
        <div>
          <SearchBar onSearch={onSearch}></SearchBar>
        </div>
        <br />
      </div>
      
    </div>
  )}
}
