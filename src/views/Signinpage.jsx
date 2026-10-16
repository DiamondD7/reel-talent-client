import Logo from "../assets/logo/ReelTalent-logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

import "../styles/signinpagestyles.css";
const Signinpage = () => {
  return (
    <div className="signin-page-container">
      <div style={{ textAlign: "center" }}>
        <img className="-logo-big-img" src={Logo} alt="reel-talent-logo" />
      </div>
      <div className="-display-flex-align-center-justify-center">
        <form className="signin-form">
          <br />
          <div className="-full-input-text-container">
            <p className="-input-label">Email</p>
            <input className="-input-text" type="text" />
          </div>
          <br />
          <div className="-full-input-text-container">
            <p className="-input-label">Password</p>
            <input className="-input-text" type="password" />
          </div>

          <button className="signin-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>or</p>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <GoogleLogin
          shape="pill"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => console.log("failed")}
        />
      </div>

      <br />
      <br />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontSize: "12px" }}>
          no account yet? <br /> <Link to="signup">click here</Link> to sign up
        </p>
      </div>
    </div>
  );
};

export default Signinpage;
