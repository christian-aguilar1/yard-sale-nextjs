import React from "react";
import "../styles/pages/PasswordRecovery.scss";

import logo from "../assets/logos/logo_yard_sale.svg";
import Image from "next/image";

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <Image src={logo} alt="logo" className="logo" />
        <h1 className="PasswordRecovery-title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="input input-email"
            placeholder="email@example.com"
          />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export { PasswordRecovery };
