import React from "react";
import './Footer.css'
import audio from "../../images/client-audiophile.svg";
import databiz from "../../images/client-databiz.svg";
import maker from "../../images/client-maker.svg";
import meet from "../../images/client-meet.svg";

export const Footer = () => {
  return (
    <footer className="mb4">
      <div className="logo-container mt5">
        <img src={audio} alt="" />
        <img src={databiz} alt="" />
        <img src={maker} alt="" />
        <img src={meet} alt="" />
      </div>
      <p className="mt4">
        Developed By{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cassius2828?tab=repositories"
        >
          Cassius Reynolds
        </a>{" "}
      </p>
    </footer>
  );
};
