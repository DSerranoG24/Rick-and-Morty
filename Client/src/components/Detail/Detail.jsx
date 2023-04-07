import useCharacter from '../../hooks/useCharacter';
import styleDetail from './Detail.module.css'


export default function Deatil(props) {
  
  const character = useCharacter();
  return (
    <div >
      <img src={character ? character.image:null} alt={character ? character.name:null} className={styleDetail.image} />
      <div className={styleDetail.cuerpo}>
        <h3>{character ? character.name:null}</h3>
        <h3>{character ? character.status:null}</h3>
        <h3>{character ? character.species:null}</h3>
        <h3>{character ? character.gender:null}</h3>
        {character ? character.origin && (
          <h3><span>Origin: </span>{character.origin}</h3>
        ):null}
      </div>
      
      

    </div>
  )
}
