import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id,setId]=useState("")
   const handleChange =(e)=>{
      setId(e.target.value);
   }
   return (
      <div>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>
   );
}