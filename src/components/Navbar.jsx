import {
  Compass,
  CompassIcon,
  FilesIcon,
  GearIcon,
  HouseIcon,
  SignOut,
  SignOutIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/navbarstyles.css";
const Navbar = ({ navActive, setNavActive }) => {
  const navigate = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();

    setNavActive("Signout");
    sessionStorage.setItem("authorized", "false");
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  return (
    <div className="navbar-container">
      <div className="-display-flex -gap-10">
        <Link
          className={`nav-button ${navActive === "Discover" ? "activeNav" : ""}`}
          to="/home"
          onClick={() => setNavActive("Discover")}
        >
          <CompassIcon
            weight={navActive === "Discover" ? "fill" : "regular"}
            className={`nav-icon ${navActive === "Discover" ? "activeNav" : ""}`}
          />
          Discover
        </Link>
        <Link
          className={`nav-button ${navActive === "Jobs" ? "activeNav" : ""}`}
          to="/home/jobs"
          onClick={() => setNavActive("Jobs")}
        >
          <FilesIcon
            weight={navActive === "Jobs" ? "fill" : "regular"}
            className={`nav-icon ${navActive === "Jobs" ? "activeNav" : ""}`}
          />
          Jobs
        </Link>
        <Link
          className={`nav-button ${navActive === "Profile" ? "activeNav" : ""}`}
          to="/home/profile"
          onClick={() => setNavActive("Profile")}
        >
          <UserIcon
            weight={navActive === "Profile" ? "fill" : "regular"}
            className={`nav-icon ${navActive === "Profile" ? "activeNav" : ""}`}
          />
          Profile
        </Link>
      </div>

      <div className="-display-flex">
        <Link
          className={`nav-button ${navActive === "Settings" ? "activeNav" : ""}`}
          to="/home/settings"
          onClick={() => setNavActive("Settings")}
        >
          <GearIcon
            weight={navActive === "Settings" ? "fill" : "regular"}
            className={`nav-icon ${navActive === "Settings" ? "activeNav" : ""}`}
          />
          Settings
        </Link>
        <button
          className={`nav-button ${navActive === "Signout" ? "activeNav" : ""}`}
          onClick={(e) => handleSignout(e)}
        >
          <SignOutIcon
            weight={navActive === "Signout" ? "fill" : "regular"}
            className={`nav-icon ${navActive === "Signout" ? "activeNav" : ""}`}
          />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
