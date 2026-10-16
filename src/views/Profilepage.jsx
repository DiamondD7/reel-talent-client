import { useState } from "react";
import { ArrowRightIcon, CaretDownIcon } from "@phosphor-icons/react";

import "../styles/profilepagestyles.css";
const ProfileHeader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="profile-page-dp__img"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="profile-picture"
      />
      <p style={{ fontWeight: "bold" }}>Aaron Sierra</p>
      <p style={{ fontSize: "12px", color: "grey" }}>Actor</p>
    </div>
  );
};

const ProfileNav = ({ activeProfileNav, setActiveProfileNav }) => {
  return (
    <div className="profile-nav-container">
      <button
        className={`-button-empty ${activeProfileNav === "Details" ? "activeProfNav" : "notActiveProfNav"}`}
        onClick={() => setActiveProfileNav("Details")}
      >
        Details {activeProfileNav === "Details" ? <CaretDownIcon /> : " "}
      </button>
      <button
        className={`-button-empty ${activeProfileNav === "Showreels" ? "activeProfNav" : "notActiveProfNav"}`}
        onClick={() => setActiveProfileNav("Showreels")}
      >
        Showreels {activeProfileNav === "Showreels" ? <CaretDownIcon /> : " "}
      </button>
      <button
        className={`-button-empty ${activeProfileNav === "Headshots" ? "activeProfNav" : "notActiveProfNav"}`}
        onClick={() => setActiveProfileNav("Headshots")}
      >
        Headshots {activeProfileNav === "Headshots" ? <CaretDownIcon /> : " "}
      </button>
    </div>
  );
};

const ProfileBio = () => {
  return (
    <div className="profile-bio-container">
      <h5 style={{ color: "#2563EB" }}>Bio</h5>
      <p style={{ marginTop: "10px", fontSize: "12px", lineHeight: "1.5" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        voluptatibus repellat quasi ipsum a illo, cupiditate vero nam illum
        soluta corporis aut, incidunt, tempore fuga eos veritatis quo nulla
        voluptas.
      </p>
    </div>
  );
};

const ProfilePhysicalDetails = () => {
  return (
    <div className="profile-physical-details-container">
      <h5 style={{ color: "#2563EB" }}>Physical Details</h5>
      <div className="-display-flex-justify-spacebetween">
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Ethnicity
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>European</p>
          <br />
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Natural Accent
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>Kiwi</p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Height
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>160cm</p>
          <br />
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Weight
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>60kg</p>
        </div>

        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Eye Color
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>Brown</p>
          <br />
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Hair Color
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>Black</p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Shoe Size
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>10 US Mens</p>
          <br />
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Clothing Size
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>Medium-Large</p>
        </div>
      </div>
    </div>
  );
};

const ProfileSkills = () => {
  return (
    <div className="profile-skills-container">
      <h5 style={{ color: "#2563EB" }}>Skills</h5>
      <div style={{ height: "150px", overflowY: "auto" }}>
        <button className="-tags-btn">Basketball</button>
        <button className="-tags-btn">Basketball</button>
        <button className="-tags-btn">Basketball</button>
        <button className="-tags-btn">Basketball</button>
        <button className="-tags-btn">Basketball</button>
        <button className="-tags-btn">Basketball</button>
        <button className="-tags-btn">Basketball</button>
        <button className="-tags-btn">Basketball</button>
      </div>
    </div>
  );
};

const ProfileLanguages = () => {
  return (
    <div className="profile-languages-container">
      <h5 style={{ color: "#2563EB" }}>Languages</h5>
      <div style={{ height: "140px", overflowY: "auto" }}>
        <button className="-tags-btn">English</button>
        <button className="-tags-btn">Filipino</button>
        <button className="-tags-btn">French</button>
        <button className="-tags-btn">Chinese</button>
      </div>
    </div>
  );
};

const ProfileExperience = () => {
  return (
    <div className="profile-experience-container">
      <h5 style={{ color: "#2563EB" }}>Experiences</h5>
      <table className="profile-experience-table">
        <thead>
          <th>Year</th>
          <th>Category</th>
          <th>Role</th>
          <th>Production</th>
          <th>Director/Company</th>
        </thead>

        <tbody>
          <tr>
            <td>2025</td>
            <td>Film</td>
            <td>Caterpillar</td>
            <td>Universal</td>
            <td>Universal Studios</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>Film</td>
            <td>Caterpillar</td>
            <td>Universal</td>
            <td>Universal Studios</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>TV</td>
            <td>Caterpillar</td>
            <td>Universal</td>
            <td>Universal Studios</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ProfileShowreels = () => {
  return (
    <div className="-display-flex-align-center-justify-center">
      <div className="-text-align-center">
        <h1 style={{ color: "grey" }}>Coming soon</h1>
        <h5>This feature will be available soon</h5>
      </div>
    </div>
  );
};

const TalentProfile = ({ activeProfileNav, setActiveProfileNav }) => {
  return (
    <>
      <ProfileNav
        activeProfileNav={activeProfileNav}
        setActiveProfileNav={setActiveProfileNav}
      />

      {activeProfileNav === "Details" && (
        <>
          <div className="-display-flex -gap-10">
            <ProfileBio />
            <ProfilePhysicalDetails />
          </div>
          <br />
          <div className="-display-flex -gap-10">
            <div>
              <ProfileSkills />
              <ProfileLanguages />
            </div>
            <ProfileExperience />
          </div>
        </>
      )}

      {activeProfileNav === "Showreels" && (
        <>
          <ProfileShowreels />
        </>
      )}
    </>
  );
};
// ----------------------------------------------------------------------------------CASTING

const CastingContact = () => {
  return (
    <div className="profile-casting-container">
      <h5 style={{ color: "#2563EB" }}>Contact Details</h5>
      <div className="-display-flex-justify-spacebetween">
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Phone number
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>021020202020</p>
          <br />
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Email address
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>
            contact@support.com
          </p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            Website
          </p>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>
            www.idontgaf.com
          </p>
        </div>
      </div>
    </div>
  );
};

const CastingJobs = () => {
  return (
    <div className="casting-jobs-container">
      <h5 style={{ color: "#2563EB" }}>Jobs</h5>
      <div className="casting-cards-container">
        <div className="casting-jobs-card">
          <h6>Film</h6>
          <h3>James</h3>
          <div style={{ height: "100px", overflowY: "auto" }}>
            <button className="-tags-btn">Men</button>
            <button className="-tags-btn">Auckland</button>
            <button className="-tags-btn">Film</button>
            <button className="-tags-btn">$2000 rate</button>
            <button className="-tags-btn">$2000 rate</button>
          </div>
          <p style={{ fontSize: "12px", lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nostrum sunt, facilis eum placeat corrupti quis illo consectetur
            provident rem impedit error ducimus earum magni porro similique ea
            nisi. Fugit.
          </p>

          <button className="casting-jobs-view-button">
            View <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const CastingProfile = () => {
  return (
    <div>
      <div className="-display-flex -gap-10">
        <ProfileBio />
        <CastingContact />
      </div>

      <div className="-display-flex">
        <CastingJobs />
      </div>
    </div>
  );
};

const Profilepage = () => {
  const [activeProfileNav, setActiveProfileNav] = useState("Details");
  return (
    <div className="profile-page-container">
      <ProfileHeader />

      {/* <CastingProfile /> */}

      <TalentProfile
        activeProfileNav={activeProfileNav}
        setActiveProfileNav={setActiveProfileNav}
      />
    </div>
  );
};

export default Profilepage;
