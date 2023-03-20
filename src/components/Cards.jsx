import Card from './Card';

export default function Cards({characters}) {
   return (
      <div className='cards'>
         {
            characters.map((character,index) => {
               return (
               <Card
               key={index}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               >
               </Card>
               )
            })
         }
      </div>
   )
}
