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
import { Link } from "react-router-dom";

import "../styles/navbarstyles.css";
const Navbar = ({ navActive, setNavActive }) => {
  return (
    <div className="navbar-container">
      <div className="-display-flex -gap-10">
        <Link
          className={`nav-button ${navActive === "Discover" ? "activeNav" : ""}`}
          to="/"
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
          to="/jobs"
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
          to="/profile"
          onClick={() => setNavActive("Profile")}
        >
          <UserIcon
            weight={navActive === "Profile" ? "fill" : "regular"}
            className={`nav-icon ${navActive === "Profile" ? "activeNav" : ""}`}
          />
          Profile
        </Link>
      </div>

      <Link
        className={`nav-button ${navActive === "Settings" ? "activeNav" : ""}`}
        to="/settings"
        onClick={() => setNavActive("Settings")}
      >
        <GearIcon
          weight={navActive === "Settings" ? "fill" : "regular"}
          className={`nav-icon ${navActive === "Settings" ? "activeNav" : ""}`}
        />
        Settings
      </Link>
    </div>
  );
};

export default Navbar;
