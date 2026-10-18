import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Logo from "../assets/logo/ReelTalent-logo.png";
import SuccessCard from "../components/SuccessCard";
import { apiFetch } from "../assets/js/apiFetch";
import {
  CircleNotchIcon,
  GoogleLogoIcon,
  WarningCircleIcon,
  XIcon,
} from "@phosphor-icons/react";

import "../styles/signuppagestyles.css";
const SignupForm = ({ success, setSuccess }) => {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordMatched, setPasswordMatched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerData, setRegisterData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    role: 0, //0 is talent, 1 is casting
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const match = PWD_REGEX.test(registerData.password);

    if (
      registerData.password !== confirmPassword ||
      registerData.password.length <= 0
    ) {
      setPasswordMatched(false);
    } else {
      setPasswordMatched(true);
    }

    if (!match) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  }, [registerData.password, confirmPassword]);

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          CompanyName: registerData.companyName,
          FirstName: registerData.firstName,
          LastName: registerData.lastName,
          Email: registerData.email,
          Password: registerData.password,
          Role: registerData.role,
        }),
      });

      if (response.status === 400) {
        console.log("Email already taken");
        setIsLoading(true);
        setShowError(true);
        setErrorMessage("Email already taken");
        return;
      }

      if (!response.ok) {
        setShowError(true);
        throw new Error("Network error");
      }

      const data = await response.json();
      setSuccess(true);
      setShowError(false);
      setErrorMessage("");
      console.log(data);
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="-display-flex-align-center-justify-center">
      {showError && !success ? (
        <div className="error-message-container">
          <div style={{ textAlign: "start" }}>
            <button
              className="-button-empty"
              onClick={() => setShowError(false)}
            >
              <XIcon color="#fff" size={17} />
            </button>
          </div>
          <WarningCircleIcon weight="fill" size={30} />
          <h3>Ooppss</h3>
          <p style={{ fontSize: "14px" }}>
            Something went wrong with your request. <br />
            {errorMessage}
          </p>
        </div>
      ) : null}
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <h4>Sign up as:</h4>
        <div className="-display-flex -gap-10 -margin-top-10">
          <button
            type="button"
            className={`signup-as ${registerData.role === 0 ? "active-signupbtn" : ""}`}
            onClick={() => {
              setRegisterData((prev) => ({
                ...prev,
                companyName: "",
                firstName: "",
                lastName: "",
                role: 0,
                password: "",
                email: "",
              }));

              setSuccess(false);
              setConfirmPassword("");
              setAcceptedTerms(false);
            }}
          >
            Talent
          </button>
          <button
            type="button"
            className={`signup-as ${registerData.role === 1 ? "active-signupbtn" : ""}`}
            onClick={() => {
              setRegisterData((prev) => ({
                ...prev,
                companyName: "",
                firstName: "",
                lastName: "",
                role: 1,
                password: "",
                email: "",
              }));
              setSuccess(false);
              setConfirmPassword("");
              setAcceptedTerms(false);
            }}
          >
            Casting
          </button>
        </div>
        <br />
        {registerData.role === 0 && (
          <div className="-display-flex -gap-10">
            <div className="-half-input-text-container">
              <p className="-input-label">First name*</p>
              <input
                className="-input-text"
                name="firstName"
                type="text"
                required
                onChange={handleOnChange}
              />
            </div>
            <div className="-half-input-text-container">
              <p className="-input-label">Last name</p>
              <input
                className="-input-text"
                name="lastName"
                type="text"
                onChange={handleOnChange}
              />
            </div>
          </div>
        )}
        {registerData.role === 1 && (
          <div className="-full-input-text-container">
            <p className="-input-label">Company name *</p>
            <input
              className="-input-text"
              name="companyName"
              type="text"
              required
              onChange={handleOnChange}
            />
          </div>
        )}
        <br />
        <div className="-full-input-text-container">
          <p className="-input-label">Email *</p>
          <input
            className="-input-text"
            name="email"
            value={registerData.email}
            type="text"
            required
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div
          className={`-full-input-text-container ${passwordMatched === false || !passwordValid ? "passwordError" : ""}`}
        >
          <p className="-input-label">Password *</p>
          <input
            className="-input-text"
            name="password"
            aria-describedby="pwd-note"
            value={registerData.password}
            type="password"
            required
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div
          className={`-full-input-text-container ${passwordMatched === false || !passwordValid ? "passwordError" : ""}`}
        >
          <p className="-input-label">Confirm password *</p>
          <input
            className="-input-text"
            aria-describedby="confirmpwd-note"
            value={confirmPassword}
            type="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {!passwordMatched && (
          <p id="confirmpwd-note" style={{ fontSize: "12px", color: "red" }}>
            - Password do not match.
          </p>
        )}

        {!passwordValid && (
          <p id="pwd-note" style={{ fontSize: "12px", color: "red" }}>
            - Password must be 8-24 characters and include an uppercase letter,
            a lowercase letter, a number, and a special character (!@#$%).
          </p>
        )}

        <div className="-display-flex -gap-10 -margin-top-10">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <label style={{ fontSize: "12px" }}>
            Agree with our{" "}
            <Link to="termsandconditions">Terms & Conditions</Link>* to sign up
          </label>
        </div>

        <button
          className={` ${acceptedTerms === false || !passwordValid || !passwordMatched ? "-btn-disabled" : "signin-submit-button"}`}
          type="submit"
          disabled={!acceptedTerms || !passwordValid || !passwordMatched}
        >
          {isLoading ? (
            <CircleNotchIcon className={"btn-loading__icon"} />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

const GoogleSignup = ({ success, setSuccess }) => {
  const [role, setRole] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignup = async (cred) => {
    const res = await apiFetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ IdToken: cred.credential, Role: role }),
    });

    const data = await res.json();
    await handleSignup(data);
  };

  const handleSignup = async (payload) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          CompanyName: payload.firstName,
          FirstName: payload.firstName,
          LastName: payload.lastName,
          Password: "",
          Email: payload.email,
          Role: role,
          ProviderId: payload.providerId,
          OtherProvider: true, //this is true for google signups
        }),
      });

      if (response.status === 400) {
        console.error("email already taken");
        setErrorMessage("Email already taken");
      }

      if (!response.ok) {
        setSuccess(false);
        setShowError(true);
        throw new Error("Network error");
      }

      const data = await response.json();
      setSuccess(true);
      setShowError(false);
      setErrorMessage("");
      console.log(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <>
      {success ? (
        <SuccessCard />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div>
            <div style={{ textAlign: "center" }}>
              {showError && !success ? (
                <div className="error-message-container">
                  <WarningCircleIcon weight="fill" size={30} />
                  <h3>Ooppss</h3>
                  <p style={{ fontSize: "14px" }}>
                    Something went wrong with your request. <br />
                    {errorMessage}
                  </p>
                </div>
              ) : null}
              <h4>Sign up as:</h4>
              <div className="-display-flex-align-center-justify-center -gap-10  -margin-top-10">
                <button
                  type="button"
                  className={`signup-as ${role === 0 ? "active-signupbtn" : ""}`}
                  onClick={() => setRole(0)}
                >
                  Talent
                </button>
                <button
                  type="button"
                  className={`signup-as ${role === 1 ? "active-signupbtn" : ""}`}
                  onClick={() => setRole(1)}
                >
                  Casting
                </button>
              </div>
            </div>

            <br />

            <div className="-display-flex -gap-10 -margin-top-10">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <label style={{ fontSize: "12px" }}>
                Agree with our{" "}
                <Link to="termsandconditions">Terms & Conditions</Link>* first
                before signing up
              </label>
            </div>

            {role !== null && acceptedTerms === true ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <GoogleLogin
                  text="signup_with"
                  shape="pill"
                  onSuccess={(credentialResponse) =>
                    handleGoogleSignup(credentialResponse)
                  }
                  onError={() => setShowError(true)}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Signuppage = () => {
  const [success, setSuccess] = useState(false);
  const [googleSignupClicked, setGoogleSignupClicked] = useState(false);

  return (
    <div className="signup-page-container">
      <div style={{ textAlign: "center" }}>
        <img className="-logo-big-img" src={Logo} alt="reel-talent-logo" />
      </div>

      {!googleSignupClicked && (
        <>
          {success === true ? (
            <SuccessCard />
          ) : (
            <SignupForm success={success} setSuccess={setSuccess} />
          )}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>or</p>
          </div>
        </>
      )}

      {!googleSignupClicked && (
        <div
          style={{
            margin: "0 auto",
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="usegoogle-signup-btn"
            onClick={() => setGoogleSignupClicked(true)}
          >
            <GoogleLogoIcon weight="fill" /> Use Google to Sign up?
          </button>
        </div>
      )}

      {googleSignupClicked && (
        <GoogleSignup success={success} setSuccess={setSuccess} />
      )}

      {!success && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p style={{ fontSize: "12px" }}>
            already have an account? <br /> <Link to="/">click here</Link> to
            sign in
          </p>
        </div>
      )}
    </div>
  );
};

export default Signuppage;
