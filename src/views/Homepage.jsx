import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "../assets/logo/ReelTalent-logo.png";
import DiscoverPage from "../views/Discoverpage";
import Navbar from "../components/Navbar";
import Settingspage from "../views/Settingspage";
import Profilepage from "../views/Profilepage";
import Jobspage from "../views/Jobspage";
const Homepage = () => {
  const [navActive, setNavActive] = useState("Discover");
  return (
    <div className="app-container__wrapper">
      <div>
        <img style={{ width: "100px" }} src={Logo} alt="ReelTalent Logo" />
      </div>

      <div>
        <Navbar navActive={navActive} setNavActive={setNavActive} />
      </div>

      <Routes>
        <Route index path="/" element={<DiscoverPage />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/settings" element={<Settingspage />} />
      </Routes>
    </div>
  );
};

export default Homepage;
