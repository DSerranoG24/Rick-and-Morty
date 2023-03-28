import React from 'react';
import Card from '../Card/Card';
import {useSelector} from 'react-redux';
import styleFavorite from './Favorites.module.css'

export default function Favorites({onClose}) {

  const myFavorite = useSelector((state)=>state.myFavorite);
  return (
    <div className={styleFavorite.container}>
      {
        myFavorite.map((my)=>{
          return(
            <div key={my.id} className={styleFavorite.containerCards}>
              <Card
                id={my.id}
                key={my.id}
                name={my.name}
                status={my.status}
                species={my.species}
                gender={my.gender}
                origin={my.origin.name}
                image={my.image}
                onClose={() => onClose(my.id)}
                >
              </Card>
            </div>
          )
        })
      }
       
    </div>
  )
}
