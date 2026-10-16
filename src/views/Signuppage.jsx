import { Link } from "react-router-dom";
import Logo from "../assets/logo/ReelTalent-logo.png";
import { GoogleLogin } from "@react-oauth/google";

import "../styles/signuppagestyles.css";
const Signuppage = () => {
  return (
    <div className="signup-page-container">
      <div style={{ textAlign: "center" }}>
        <img className="-logo-big-img" src={Logo} alt="reel-talent-logo" />
      </div>
      <div className="-display-flex-align-center-justify-center">
        <form className="signup-form">
          <br />
          <div className="-email-input-text-container">
            <p className="-input-label">Full name *</p>
            <input className="-input-text" type="text" required />
          </div>
          <br />
          <div className="-email-input-text-container">
            <p className="-input-label">Email *</p>
            <input className="-input-text" type="text" required />
          </div>
          <br />
          <div className="-email-input-text-container">
            <p className="-input-label">Password *</p>
            <input className="-input-text" type="password" required />
          </div>
          <br />
          <div className="-email-input-text-container">
            <p className="-input-label">Confirm password *</p>
            <input className="-input-text" type="password" required />
          </div>

          <div className="-display-flex -gap-10 -margin-top-10">
            <input type="checkbox" />
            <label style={{ fontSize: "12px" }}>
              Agree with our{" "}
              <Link to="termsandconditions">Terms & Conditions</Link>*
            </label>
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
          text="signup_with"
          shape="pill"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => console.log("failed")}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontSize: "12px" }}>
          already have an account? <br /> <Link to="/">click here</Link> to sign
          in
        </p>
      </div>
    </div>
  );
};

export default Signuppage;
