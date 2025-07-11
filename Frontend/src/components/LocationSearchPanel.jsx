import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "Royal street, london",
    "Park street, Kolkata",
    "14, Nandi Bagan bye lane",
    "69, Bandra street mumbai",
  ];
  return (
    <div>
      {/* for temporary use */}
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            props.setVehiclePanel(true)
            props.setpanelOpen(false)
          }}
          className="flex items-center justify-start border-2 border-gray-100 active:border-black cursor-pointer rounded-xl my-4 gap-4"
        >
          <h2 className="bg-[#eeeeee] flex items-center justify-center h-8 w-12 rounded-xl">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-semibold">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
