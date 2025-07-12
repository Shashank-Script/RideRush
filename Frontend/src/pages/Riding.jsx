import React from "react";

const Riding = () => {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-18"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
            alt="car image"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Christino Messi</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">WB 02 XY69</h4>
            <p className="text-sm text-gray-600">Ferrari,silver-black</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="w-full mt-5">
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
        <button className="w-full mt-5 p-2 bg-black cursor-pointer text-white rounded-lg ">Make a payment</button>
      </div>
    </div>
  );
};

export default Riding;
