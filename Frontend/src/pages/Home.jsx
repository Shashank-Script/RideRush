import React from 'react'
import RideRush_logo from '../assets/RideRush_logo.png'

const Home = () => {
  return (
    <div className='h-screen w-full flex justify-between flex-col bg-red-400'>
        <img src={RideRush_logo} alt="RideRush logo" />
        <div className='bg-white'>
            <h2>Get Started With RideRush</h2>
            <button>Continue</button>
        </div>
    </div>
  )
}

export default Home