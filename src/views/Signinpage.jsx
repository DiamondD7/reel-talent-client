import Logo from "../assets/logo/ReelTalent-logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiFetch } from "../assets/js/apiFetch";
import { CircleNotchIcon, WarningCircleIcon } from "@phosphor-icons/react";

import "../styles/signinpagestyles.css";
const Signinpage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    setIsLoading(true);
    try {
      const res = await apiFetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      if (res.status === 400) {
        setErrorMessage("Invalid email/password");
        setError(true);
        return;
      }

      if (!res.ok) {
        setError(true);
        setErrorMessage("Something went wrong.");
        throw new Error("something went wrong.");
      }

      const data = await res.json();
      //console.log(data);
      sessionStorage.setItem("authorized", "true");
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
        navigate("/home");
      }, 1500);
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="signin-page-container">
      <div style={{ textAlign: "center" }}>
        <img className="-logo-big-img" src={Logo} alt="reel-talent-logo" />
      </div>
      {error && (
        <div className="-error-container -margin-center -text-align-center">
          <WarningCircleIcon size={25} weight="fill" />
          <h4>Try Again</h4>
          <p style={{ fontSize: "13px" }}>
            Something went wrong. <br /> {errorMessage}
          </p>
        </div>
      )}
      <div className="-display-flex-align-center-justify-center">
        <form
          className="signin-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignin();
          }}
        >
          <br />
          <div className="-full-input-text-container">
            <p className="-input-label">Email</p>
            <input
              className="-input-text"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="-full-input-text-container">
            <p className="-input-label">Password</p>
            <input
              className="-input-text"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="signin-submit-button" type="submit">
            {isLoading ? (
              <CircleNotchIcon className={"btn-loading__icon"} />
            ) : (
              "Submit"
            )}
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
