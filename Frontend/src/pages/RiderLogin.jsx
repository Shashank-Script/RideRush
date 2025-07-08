import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RideRush_logo from "../assets/RideRush_logo.png";
import axios from "axios";  
import { RiderDataContext } from '../context/RiderContext';
import { useContext } from 'react';

const RiderLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const navigate = useNavigate();
  const {rider, setRider} = useContext(RiderDataContext);

    const submitHandler = async (e) => {
      e.preventDefault();
      const riderData = {
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/rider/login`, riderData);
      if(response.status === 200){
        const data = response.data
        setRider(data.rider);
        localStorage.setItem('token', data.token);
        navigate("/riderhome")
      }

      setEmail("");
      setPassword("");
    };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-10" src={RideRush_logo} alt="riderush logo" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Example@email.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded py-2 px-4 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-black text-white mb-2 py-2 px-4 rounded w-full text-lg font-semibold cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/ridersignup" className="text-blue-600">
            Create an account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/login" className="bg-[#d5622d] flex justify-center items-center text-white mb-5 py-2 px-4 rounded w-full text-lg font-semibold">
          Signin as User
        </Link>
      </div>
    </div>
  )
}

export default RiderLogin