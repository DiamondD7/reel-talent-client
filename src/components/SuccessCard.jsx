import { CheckCircleIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SuccessCard = () => {
  return (
    <div className="-success-card-container">
      <CheckCircleIcon size={50} weight="fill" />
      <h3>Success!</h3>
      <p style={{ fontSize: "12px" }}>
        You have successfully signed up your account, <br /> It is time to sign
        in{" "}
        <Link style={{ color: "#fff" }} to="/">
          click here
        </Link>{" "}
        to go to the sign in page
      </p>
    </div>
  );
};

export default SuccessCard;
