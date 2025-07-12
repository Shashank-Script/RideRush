import React from "react";

const RiderDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/Tony-Stark-MCU.jpg?q=70&fit=contain&w=1200&h=628&dpr=1"
            alt=""
          />
          <h4 className="text-lg font-medium">Tony Stark</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹2699.69</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 mt-6 bg-gray-100 rounded-xl items-start justify-center gap-5">
        <div className="text-center">
          <i className="text-3xl font-thin mb-2 ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-thin mb-2 ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-thin mb-2 ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default RiderDetails;
