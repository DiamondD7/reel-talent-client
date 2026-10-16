import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./assets/logo/ReelTalent-logo.png";
import Discoverpage from "./views/Discoverpage";
import Navbar from "./components/Navbar";
import Settingspage from "./views/Settingspage";
import Profilepage from "./views/Profilepage";
import Jobspage from "./views/Jobspage";
import Signinpage from "./views/Signinpage";
import Signuppage from "./views/Signuppage";

import "./App.css";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [navActive, setNavActive] = useState("Discover");
  return (
    <div className="app-container__wrapper">
      {isSignedIn ? (
        <>
          <div>
            <img style={{ width: "100px" }} src={Logo} alt="ReelTalent Logo" />
          </div>

          <div>
            <Navbar navActive={navActive} setNavActive={setNavActive} />
          </div>

          <Routes>
            <Route index path="/" element={<Discoverpage />} />
            <Route path="jobs" element={<Jobspage />} />
            <Route path="profile" element={<Profilepage />} />
            <Route path="settings" element={<Settingspage />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route index path="/" element={<Signinpage />} />
            <Route index path="/signup" element={<Signuppage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
