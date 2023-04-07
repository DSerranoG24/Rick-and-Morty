import React, {useState} from 'react';
import Card from '../Card/Card';
import {useSelector} from 'react-redux';
import styleFavorite from './Favorites.module.css'
import { filterCards, orderCards, removeFav, reset } from '../../redux/actions/actions';
import {useDispatch} from 'react-redux'

export default function Favorites({onClose}) {

  const dispatch = useDispatch()

  const closeFavorite =(id)=>{
    onClose(id);
    dispatch(removeFav(id));
  }

  const reserFavorite =()=>{
    dispatch(reset());
  }

  const [aux, setAux] = useState(false);

  const myFavorite = useSelector((state)=>state.myFavorite);

  const handleOrder = (e)=>{
    dispatch(orderCards(e.target.value))
    aux ? setAux(false):setAux(true);
  }

  const handleFilter = (e)=>{
    dispatch(filterCards(e.target.value))
  }

  return (
    <div >
      <select name="order" id="" defaultValue={"DEFAULT"} onChange={handleOrder}>
        <option value="DEFAULT">Select order</option>
        <option value="A">ascendente</option>
        <option value="D">descendente</option>
      </select>
      <select name="" id=""  defaultValue={"DEFAULT"} onChange={handleFilter}>
      <option value="DEFAULT">Select order</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={reserFavorite}>RESET</button>
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
                  origin={my.origin}
                  image={my.image}
                  onClose={() => closeFavorite(my.id)}
                  >
                </Card>
              </div>
            )
          })
        }  
      </div>
      
       
    </div>
  )
}
