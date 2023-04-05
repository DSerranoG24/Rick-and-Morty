import './App.css'
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import{Routes, Route} from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters,setCharacters] = useState([])

   const onSearch = (id)=>{
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters((oldChars) =>{
         return oldChars.filter((ch)=> ch.id !== id)
      });
   }

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}></Nav>
         <Routes>
            <Route path='/' element={
               <Form/>
            }/>
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose}/>
            }/>
            <Route path='/about' element={
               <About/>
            }/>
            <Route path='/detail/:id' element={
               <Detail/>
            }/>
            <Route path='/favorite' element={
                <Favorites onClose={onClose}/> 
            }/>
         </Routes>
      </div>
   );
}

export default App;
