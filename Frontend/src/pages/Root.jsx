import React from 'react'
import RideRush_logo from '../assets/RideRush_logo.png'
import { Link } from 'react-router-dom'

const Root = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col'>
        <img className='w-30 ml-8' src={RideRush_logo} alt="RideRush logo" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-bold'>Get Started With RideRush</h2>
            <Link to="/login" className='flex justify-center items-center w-full bg-black text-white py-3 rounded-lg mt-5 '>Continue</Link>
        </div>
    </div>
  )
}

export default Root