import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import Filtering from "../components/Filtering";
import CastingCallCard from "../components/CastingCallCard";
import Navbar from "../components/Navbar";

import "../styles/homepagestyles.css";
import Fullcastingcallcard from "../components/Fullcastingcallcard";
const Discoverpage = () => {
  const [isViewCastingClicked, setIsViewCastingClicked] = useState(false);
  return (
    <div className="homepage-container">
      {isViewCastingClicked && <div className="overlay"></div>}
      {isViewCastingClicked && (
        <Fullcastingcallcard
          setIsViewCastingClicked={setIsViewCastingClicked}
        />
      )}

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Searchbar />
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <Filtering />
      </div>
      <div style={{ height: "600px", width: "100%", overflowY: "scroll" }}>
        <CastingCallCard setIsViewCastingClicked={setIsViewCastingClicked} />
        <CastingCallCard />
        <CastingCallCard />
        <CastingCallCard />
      </div>
    </div>
  );
};

export default Discoverpage;
