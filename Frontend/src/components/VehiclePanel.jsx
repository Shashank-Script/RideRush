import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclePanelOpen(false)}
        className="absolute p-5 text-center text-3xl font-bold top-0 right-0 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div onClick={() => props.setConformRidePanelOpen(true)}  className="flex w-full p-3 mb-2 border-2 cursor-pointer active:border-black border-gray-100 rounded-lg items-center justify-between">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt="car image"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            RushGO{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">₹269.69</h2>
      </div>
      <div onClick={() => props.setConformRidePanelOpen(true)}  className="flex w-full p-3 mb-2 border-2 cursor-pointer active:border-black border-gray-100 rounded-lg items-center justify-between">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
          alt="bike image"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            RushMoto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-medium text-xs">Affordable, motorcycle rides</p>
        </div>
        <h2 className="text-2xl font-semibold">₹69.69</h2>
      </div>
      <div onClick={() => props.setConformRidePanelOpen(true)} className="flex w-full p-3 mb-2 border-2 cursor-pointer active:border-black border-gray-100 rounded-lg items-center justify-between">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="auto image"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            RushAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-medium text-xs">Affordable, eco-friendly rides</p>
        </div>
        <h2 className="text-2xl font-semibold">₹100.69</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
