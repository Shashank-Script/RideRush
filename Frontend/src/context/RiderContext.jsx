import React, { createContext, useState } from 'react'

export const RiderDataContext = createContext()

const RiderContext = ({children}) => {
    const [rider, setRider] = useState({
        fullname: {
            firstName: "",
            lastName: "",
        },
        email: "",
        vehicle: {
            color: "",
            plateNo: "",
            capacity: "",
            vehicleType: "",
        },
    })
  return (
    <div>
      <RiderDataContext.Provider value={{rider, setRider}}>
        {children}
      </RiderDataContext.Provider>
    </div>
  )
}

export default RiderContext