import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin' 
import UserSignup from './pages/UserSignup'
import RiderLogin from './pages/RiderLogin'
import RiderSignup from './pages/RiderSignup'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} /> 
        <Route path='/riderlogin' element={<RiderLogin />} />
        <Route path='/ridersignup' element={<RiderSignup />} /> 
      </Routes>
    </div>
  )
}

export default App