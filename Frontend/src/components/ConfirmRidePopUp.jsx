import React from 'react'

const ConfirmRidePopUp = (props) => {
  return (
    <div>
        <h5
        onClick={() =>props.setRidePopUpPanel(false)}
        className="absolute p-5 text-center text-3xl font-bold top-0 right-0 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEp_z_wRam1yB2KFlI83fqpElSXkTFHp2-w&s" alt="" />
            <h2 className='text-lg font-medium'>Bruce Wayne</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2KM</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
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
        <button
          onClick={() => {
            
          }}
          className="w-full mt-5 p-2 bg-green-600 cursor-pointer text-white rounded-lg "
        >
          Confirm
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopUpPanel(false)
            props.setRidePopUpPanel(false)
          }}
          className="w-full mt-5 p-2 bg-red-600 cursor-pointer text-white rounded-lg "
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ConfirmRidePopUp