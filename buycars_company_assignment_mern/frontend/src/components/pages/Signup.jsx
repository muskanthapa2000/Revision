import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignupDataSuccess } from '../redux/action';

export default function Signup() {
  // const selector = useSelector((state)=> state);
  // console.log(selector);

  const [newUser , setNewUser] = useState({
    name : "",
    email : "",
    password : "",
    city : ""
  })

  const dispatch = useDispatch();

  const handleChange =(e)=>{
    setNewUser({...newUser , [e.target.name] : e.target.value})
  }

  const handleSubmit =()=>{
    dispatch(SignupDataSuccess(newUser));
  }
  

  return (
    <div>
      <input type="text" placeholder='enter name' value = {newUser.name} onChange={handleChange} name = "name" />
      <input type="text" placeholder='enter email' value = {newUser.email} onChange={handleChange} name = "email"/>
      <input type="text" placeholder='enter password' value = {newUser.password}  onChange={handleChange} name = "password"/>
      <input type="text" placeholder='enter city' value = {newUser.city} onChange={handleChange} name = "city"/>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}
