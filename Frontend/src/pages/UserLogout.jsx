import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const UserLogout = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleUserLogout = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/logout`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }); 
    if(response.status === 200){
      localStorage.removeItem('token');
      navigate('/login');
    }
  }

  return (
    handleUserLogout(),
    <div>UserLogout</div>
  )
}

export default UserLogout