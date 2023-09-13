import React from "react";
import data from "../../data";
import DropMenu from "../DropMenu/DropMenu";
import './Nav.css'

export const Nav = ({ toggleHam }) => {
  return (
    <>
      {" "}
      <nav id="navbar">
        <h1>Snap</h1>

        <div className="desktop-nav">
          {" "}
          {data.map((i) => {
            return (
              <DropMenu
                topic={i.topic}
                icon={i.icon?.map((item, index) => {
                  return item;
                })}
                list={i.list?.map((item, index) => {
                  return (
                    <li id={index} key={item}>
                      {item}
                    </li>
                  );
                })}
              />
            );
          })}
          <div className="desktop-btn-container">
            <button className="br-pill">Login</button>
            <button className="br-pill">Sign Up</button>
          </div>
        </div>

        {/* mobile nav design below */}
        <div
          onClick={toggleHam}
          id="hamburger"
          className="hamburger-container"
        ></div>
      </nav>
      <div id="side-menu" className="side-menu">
        {data.map((i) => {
          return (
            <DropMenu
              topic={i.topic}
              icon={i.icon?.map((item, index) => {
                return item;
              })}
              list={i.list?.map((item, index) => {
                return (
                  <li id={index} key={item}>
                    {item}
                  </li>
                );
              })}
            />
          );
        })}
        <div className="slide-btn-container">
          <button className="br-pill">Login</button>
          <button className="br-pill">Sign Up</button>
        </div>
      </div>
    </>
  );
};
