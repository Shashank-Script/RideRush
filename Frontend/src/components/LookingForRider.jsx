import React from "react";

const LookingForRider = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehicleFound(false)}
        className="absolute p-5 text-center text-3xl font-bold top-0 right-0 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking for nearby rider</h3>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-30"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt="car image"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h4 className="text-lg font-medium">69/26B</h4>
              <p className="text-sm text-gray-700">Royal street, London</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2  border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className="text-lg font-medium">69/26B</h4>
              <p className="text-sm text-gray-700">Royal street, London</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2  border-gray-300">
            <i className="text-lg ri-bank-card-fill"></i>
            <div>
              <h4 className="text-lg font-medium">₹269.69</h4>
              <p className="text-sm text-gray-700">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForRider;
