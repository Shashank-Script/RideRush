import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiderDataContext } from "../context/RiderContext";
import axios from "axios";

const RiderProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {rider,setRider} = useContext(RiderDataContext);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    if (!token) {
      navigate("/riderlogin");
    }
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/rider/profile `, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if(response.status === 200){
          setRider(response.data.rider);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        localStorage.removeItem("token"); 
        navigate("/riderlogin")});
  }, [token]);

  if(isLoading){
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default RiderProtectedWrapper;
