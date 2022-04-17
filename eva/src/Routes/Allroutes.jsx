
import { NotFoundPage } from "../components/NotFoundPage";
import React from 'react'
import {Route , Routes} from 'react-router-dom'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Sign } from '../components/Sign'
import { Details } from "../components/flatdetails";
import {useSelector}  from 'react-redux'
import {Navigate} from 'react-router-dom'

export const PrivateRouter = ({isAuth , children}) => {
    return isAuth ? children : <Navigate  to="/login"/>
  }

export const Routeing = () => {
const {isAuth} = useSelector((state) => state.login)


  return (
    <>
    <Routes>
        <Route path='/' element={
          <PrivateRouter isAuth={isAuth}>
      <Home/>
        </PrivateRouter>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='/flats/:id' element={<Details/>} />

    </Routes>

    </>
  )
}