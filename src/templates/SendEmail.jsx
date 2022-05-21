import React from "react";
import "../styles/pages/SendEmail.scss";

import logo from "../assets/logos/logo_yard_sale.svg";
import iconEmails from "../assets/icons/email.svg";
import Image from "next/image";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <Image src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <Image src={iconEmails} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export { SendEmail };
