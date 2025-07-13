import React, { useRef, useState } from "react";
import RideRush_logo from "../assets/RideRush_logo.png";
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConformRide from "../components/ConformRide";
import LookingForRider from "../components/LookingForRider";
import WaitingForRider from "../components/WaitingForRider";

const UserHome = () => {

  const [pickUp, setpickUp] = useState('')
  const [destination, setdestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [conformRidePanelOpen, setConformRidePanelOpen] = useState(false)
  const conformRidePanelRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const [waitingForRider, setWaitingForRider] = useState(false)
  const waitingForRiderRef = useRef(null)

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

  useGSAP(() => {
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])

  useGSAP(() => {
    if(conformRidePanelOpen){
      gsap.to(conformRidePanelRef.current,{
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(conformRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[conformRidePanelOpen])

  useGSAP(() => {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

   useGSAP(() => {
    if(waitingForRider){
      gsap.to(waitingForRiderRef.current,{
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(waitingForRiderRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForRider])

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
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5"
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
          <LocationSearchPanel setpanelOpen={setpanelOpen} setVehiclePanel={setVehiclePanelOpen}  />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 translate-y-full  bg-white w-full px-3 py-10 pt-12">
        <VehiclePanel setConformRidePanelOpen={setConformRidePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={conformRidePanelRef} className="fixed z-10 bottom-0 translate-y-full  bg-white w-full px-3 py-6 pt-12">
        <ConformRide setConformRidePanelOpen={setConformRidePanelOpen} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 translate-y-full  bg-white w-full px-3 py-6 pt-12">
        <LookingForRider setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForRiderRef} className="fixed z-10 bottom-0 translate-y-full  bg-white w-full px-3 py-6 pt-12">
        <WaitingForRider waitingForRider={waitingForRider} setWaitingForRider={setWaitingForRider}/>
      </div>
    </div>
  );
};

export default UserHome;
