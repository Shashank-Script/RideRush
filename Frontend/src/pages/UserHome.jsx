import React, { useRef, useState } from "react";
import RideRush_logo from "../assets/RideRush_logo.png";
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel";

const UserHome = () => {

  const [pickUp, setpickUp] = useState('')
  const [destination, setdestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  useGSAP(() => {
    if(panelOpen){
      gsap.to(panelRef.current,{
      height:'70%',
      padding:24
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-25 absolute left-5 top-5"
        src={RideRush_logo}
        alt="RideRush logo"
      />
      <div className="h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen w-full absolute top-0">
        <div className="h-[30%] bg-white p-6 w-full relative">
          <h5 ref={panelCloseRef} className="absolute top-6 right-6 text-3xl opacity-0 cursor-pointer" onClick={() => setpanelOpen(false)}>
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-l w-full mt-5"
              type="text"
              value={pickUp}
              onChange={(e) => setpickUp(e.target.value)}
              onClick={() => setpanelOpen(true)}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              onClick={() => setpanelOpen(true)}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed z-10 bottom-0 translate-y-full  bg-white w-full px-3 py-6">
        <div className="flex w-full p-3 mb-2 border-2 cursor-pointer active:border-black border-gray-100 rounded-lg items-center justify-between">
          <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="car image" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">RushGO <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-2xl font-semibold">₹269.69</h2>
        </div>
        <div className="flex w-full p-3 mb-2 border-2 cursor-pointer active:border-black border-gray-100 rounded-lg items-center justify-between">
          <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="car image" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">RushMoto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-2xl font-semibold">₹69.69</h2>
        </div>
        <div className="flex w-full p-3 mb-2 border-2 cursor-pointer active:border-black border-gray-100 rounded-lg items-center justify-between">
          <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car image" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">RushAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-medium text-xs">Affordable, eco-friendly rides</p>
          </div>
          <h2 className="text-2xl font-semibold">₹100.69</h2>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
