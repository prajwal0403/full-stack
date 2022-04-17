import React, { useState } from 'react'
import {sign_loding ,sign_err ,sign_success} from "../Redux/Signup/action"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import axios from 'axios'
export const Sign = () => {
 
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleSubmit = () =>{
   const userregdata = {
 
    email,
    password
  } 
  

  dispatch(sign_loding());
  axios
    .post("https://apartmanager.herokuapp.com/api/register", userregdata )
    .then((res) => {
      dispatch(sign_success(res.token));
      navigate("/login")
    })
    .catch((err) => {
      dispatch(sign_err())
    });
 }

  return (
    <div>
      <input type="text" placeholder='email' value={email}  onChange={(e) =>{
        setEmail(e.target.value)
      }}/>
      <input type="text" placeholder='password' value={password}  onChange={(e) =>{
        setPassword(e.target.value)
      }}/>
         <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}