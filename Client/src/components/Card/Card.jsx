import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions/actions';
import {useDispatch,useSelector} from 'react-redux';
import style from './Card.module.css';

export default function Card(prop) {

  const dispatch = useDispatch();
  const myFavorite = useSelector((state)=>state.allCharacters);

   useEffect(() => {
      myFavorite.forEach((fav) => {
         if (fav.id === prop.id) {
            setIsFav(true);
         }
      });
   }, [myFavorite]);
  //console.log(myFavorite)

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(prop.id))
      }else {
         setIsFav(true)
         dispatch(addFav(prop))
      }
   }

   const superOnClose = ()=>{
      prop.onClose();
      dispatch(removeFav(prop.id));
   }

   return (
      <div className={style.conteiner}>
         <button className={style.boton1} onClick={superOnClose}>⚔️</button>
            {
               isFav ? (
                  <button onClick={handleFavorite} className={style.fav}>❤️</button>
               ) : (
                  <button onClick={handleFavorite} className={style.nofav}>🤍</button>
               )
            }  
         <Link to={`/detail/${prop.id}`} >
               <span>
                <h3 className={style.name}>{prop.name}</h3>  
               </span>
            </Link>
            <img className="img1" src={prop.image} alt={prop.name} /> 
            
      </div>
   );
}
