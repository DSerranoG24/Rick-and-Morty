import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {Link, useLocation} from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav({onSearch}) {
  let {pathname}= useLocation()
  const aleatorio = ()=>{
    onSearch(Math.floor(Math.random() * 826))
  }
  if(pathname !== "/"){return (
    <div className={style.container}>
      <div className={style.containerCards}>
        <div>
          <Link to="/about">
            <button  className={style.button}>About</button>
          </Link>
        </div>
        <div>
          <Link to="/home">
            <button className={style.button}>Home</button>
          </Link>
        </div>
        <div>
          <Link to="/favorite">
            <button className={style.button}>Favorites</button>
          </Link>
        </div>
        <div>
          <SearchBar onSearch={onSearch}></SearchBar>
        </div>
        <div>
          <button onClick={aleatorio} className={style.button}>Ramdon</button>
        </div>
        <br />
      </div>
      
    </div>
  )}
}
