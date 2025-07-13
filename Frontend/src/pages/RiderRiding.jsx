import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import RideRush_logo from "../assets/RideRush_logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FinishRide from "../components/FinishRide";

const RiderRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(() => {
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[finishRidePanel])

  return (
    <div className="h-screen relative">
      <div className="fixed top-0 p-6 flex items-center justify-between w-full">
        <img className="w-20 h-20" src={RideRush_logo} alt="RideRush logo" />
        <Link
          to={"/riderlogin"}
          className="h-10 w-10 flex items-center justify-center bg-white"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-black relative">
        <h5 className="absolute p-1 w-screen text-center top-0 cursor-pointer">
          <i className="text-3xl text-white font-semibold ri-arrow-up-wide-fill"></i>
        </h5>
        <h4 className="text-white font-semibold text-xl">4 KM away</h4>
        <button onClick={() => setFinishRidePanel(true)} className="p-2 px-10 bg-green-600 rounded-xl cursor-pointer text-white">
          Complete Ride
        </button>
      </div>
      <div 
        ref={finishRidePanelRef}
        className="fixed z-10 h-screen bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default RiderRiding;
