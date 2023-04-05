import useCharacter from '../../hooks/useCharacter';
import styleDetail from './Detail.module.css'


export default function Deatil(props) {
  
  const character = useCharacter();
  return (
    <div >
      <img src={character ? character.image:null} alt={character ? character.name:null} className={styleDetail.image} />
      <div className={styleDetail.cuerpo}>
        <h3>Name: {character ? character.name:null}</h3>
        <h3>Status: {character ? character.status:null}</h3>
        <h3>Specie: {character ? character.species:null}</h3>
        <h3>Gender: {character ? character.gender:null}</h3>
        {character ? character.origin && (
          <h3>Origin: {character.origin.name}</h3>
        ):null}
      </div>
      
      

    </div>
  )
}
