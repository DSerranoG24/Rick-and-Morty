import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import style from './Form.module.css';

const miEmail = "daniel3112933987@gmail.com";
const miContraseña = "danielelmejor"
export function validate(input) {
    var errors = {}
    if(miEmail != input.email) {errors.email="Email incorrecto"};
    if(miContraseña != input.password) {errors.password ="Contraseña incorrecta"};
    return errors;
  }

export default function Form() {

    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        email:"",
        password:"",
    })

    const [errors,setErrors] = useState({
        email:"2",
        password:"",
    })

    const handleChange =(e)=>{
        const {value,name} = e.target;
        setUserData({...userData,[name]:value});
        setErrors(validate({...userData,[name]:value}));
      }

    useEffect(()=>{

    },[errors])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Object.keys(errors).length)alert("Debe llenar todos los campos con los datos correctos")
        else{
          alert("Datos completos");
          setUserData({
            email:"",
            password:"",
          })
          setErrors({
            email:"",
            password:"",
          })
          navigate('/home')
        }
      }
  return (
    <div className={style.conteiner}>

    <form onSubmit={handleSubmit}>

        <img src="https://playbyplaytoys.es/wp-content/uploads/2021/01/rickymorty_bleed.png" alt="tilte" className={style.title}/>
        <br />
        <br />
        <label htmlFor="">EMAIL</label>
        <br />
        <input 
        className={errors.email ? style.warning:style.input}
        type="text"
        name='email' 
        placeholder='Escribe tu email...' 
        value={userData.email} 
        onChange={handleChange}
         />

        <p className={style.danger}>{errors.email}</p>

        <label htmlFor="">PASSWORD</label>
        <br />
        <input 
        className={errors.password ? style.warning:style.input}
        type="password"
        name='password' 
        placeholder='Escribe tu contraseña...' 
        value={userData.password}
        onChange={handleChange}
        />

        <p className={style.danger}>{errors.password}</p>
        <br />
        
        <button type='submit'className={style.button}>Submit</button>

    </form>  

    </div>
    
  )
}
