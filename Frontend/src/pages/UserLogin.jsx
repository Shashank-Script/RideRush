import React, { useContext, useState } from "react";
import RideRush_logo from "../assets/RideRush_logo.png";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext.jsx";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, userData);
    if(response.status === 200){
      const data = response.data
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate("/home")
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
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
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
          <Link to="/signup" className="text-blue-600">
            Create an account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/riderlogin" className="bg-[#10b461] flex justify-center items-center text-white mb-5 py-2 px-4 rounded w-full text-lg font-semibold">
          Signin as Rider
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
