import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions/actions';
import {useDispatch,useSelector} from 'react-redux';

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
      <div >
         <button className="boton1" onClick={superOnClose}>X</button>
         <div className='card'>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
         <Link to={`/detail/${prop.id}`} >
            
            <h3 className="card-name">{prop.name}</h3>
            <h2>{prop.id}</h2>
            <h2>{prop.status}</h2>
            <h2>{prop.species}</h2>
            <h2>{prop.gender}</h2>
            <h2>{prop.origin}</h2>
            <img className="img1" src={prop.image} alt={prop.name} /> 
         </Link>
         </div>
         <div>
            <h1>

            </h1>
         </div>
         
      </div>
   );
}
