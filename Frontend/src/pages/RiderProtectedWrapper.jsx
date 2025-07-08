import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RiderProtectedWrapper = ({children}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if(!token){
            navigate('/riderlogin')
        }
    },[token])
    
  return (
    <>
        {children}
    </>
  )
}

export default RiderProtectedWrapper