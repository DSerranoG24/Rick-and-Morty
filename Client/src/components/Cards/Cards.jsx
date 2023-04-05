import Card from '../Card/Card';
import styledCards from './Cards.module.css'

export default function Cards({characters,onClose}) {
   return (
      <div className={styledCards.container}>
         {
            characters.map((character,index) => {
               return (
               <div className={styledCards.containerCards} key={index}>
               <Card
               id={character.id}
               key={index}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={() => onClose(character.id)}
               >
               </Card>
               </div>
               )
            })
         }
      </div>
   )
}
