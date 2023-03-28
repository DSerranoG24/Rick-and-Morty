import useCharacter from '../../hooks/useCharacter';


export default function Deatil(props) {
  
  const character = useCharacter();
  return (
    <div>
      <h3>{character ? character.name:null}</h3>
      <h3>{character ? character.status:null}</h3>
      <h3>{character ? character.species:null}</h3>
      <h3>{character ? character.gender:null}</h3>
      {character ? character.origin && (
        <h3>{character.origin.name}</h3>
      ):null}
      <img src={character ? character.image:null} alt={character ? character.name:null} />

    </div>
  )
}
