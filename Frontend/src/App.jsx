import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import RiderLogin from "./pages/RiderLogin";
import RiderSignup from "./pages/RiderSignup";
import Root from "./pages/Root";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import RiderProtectedWrapper from "./pages/RiderProtectedWrapper";
import RiderHome from "./pages/RiderHome";
import RiderLogout from "./pages/RiderLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/riderlogin" element={<RiderLogin />} />
        <Route path="/ridersignup" element={<RiderSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/riderhome"
          element={
            <RiderProtectedWrapper>
              <RiderHome />
            </RiderProtectedWrapper>
          }
        />
        <Route
          path="/riderlogout"
          element={
            <RiderProtectedWrapper>
              <RiderLogout />
            </RiderProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
