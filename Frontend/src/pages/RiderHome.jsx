import { Link } from "react-router-dom";
import RideRush_logo from "../assets/RideRush_logo.png";
import RiderDetails from "../components/RiderDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RiderHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const ridePopUpRef = useRef(null)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const confirmRidePopUpRef = useRef(null)

  useGSAP(() => {
    if(ridePopUpPanel){
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopUpPanel])

  useGSAP(() => {
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpRef.current,{
        transform:'translateY(0%)'
      })
    }else{
      gsap.to(confirmRidePopUpRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopUpPanel])

  return (
    <div className="h-screen">
      <div className="fixed top-0 p-6 flex items-center justify-between w-full">
        <img className="w-20 h-20" src={RideRush_logo} alt="RideRush logo" />
        <Link
          to={"/riderlogin"}
          className="h-10 w-10 flex items-center justify-center bg-white"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <RiderDetails />
      </div>
      <div 
        ref={ridePopUpRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-12"
      >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
      <div 
        ref={confirmRidePopUpRef}
        className="fixed z-10 h-screen bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  );
};

export default RiderHome;
