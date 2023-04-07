import { useState } from "react";
import style from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
   const [id,setId]=useState("")
   const handleChange =(e)=>{
      setId(e.target.value);
   }
   return (
      <div>
         <input className={style.input} type='search' value={id} onChange={handleChange}/>
         <button className={style.button} onClick={()=>{onSearch(id)}}>🔍</button> 
      </div>
   );
}
