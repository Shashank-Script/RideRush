import { Route, Routes } from "react-router-dom";
import UserHome from "./pages/UserHome";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import Root from "./pages/Root";
import RiderLogin from "./pages/RiderLogin";
import RiderSignup from "./pages/RiderSignup";
import RiderProtectedWrapper from "./pages/RiderProtectedWrapper";
import RiderHome from "./pages/RiderHome";
import RiderLogout from "./pages/RiderLogout";
import Riding from "./pages/Riding";
import RiderRiding from "./pages/RiderRiding";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/riderlogin" element={<RiderLogin />} />
        <Route path="/ridersignup" element={<RiderSignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/rider-riding" element={<RiderRiding />} />

        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <UserHome />
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
