import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RiderLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleRiderLogout = async () => {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/rider/logout`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        if(response.status === 200){
          localStorage.removeItem('token');
          navigate('/riderlogin');
        }
    }
  return (
    handleRiderLogout(),
    <div>RiderLogout</div>
  )
}

export default RiderLogout