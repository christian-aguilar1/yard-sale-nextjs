import React from "react";
import "../styles/pages/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-info">
        <h1 className="not-found-title">404</h1>
        <h2>This page is not found</h2>
        <button className="primary-button">Go Home</button>
      </div>
    </div>
  );
};

export { NotFound };
