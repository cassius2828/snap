import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";

export const LoginModal = () => {
  const [signUp, setSignUp] = useState(false);
  const toggleLogin = () => {
    setSignUp( current => !current);
  };

  const config = {
    num: [5, 8],
    rps: 53,
    radius: [5, 40],
    life: [1.5, 2],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    // alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "all", // all or center or {x:1,y:1,width:100,height:100}
    // color: ["random", 'red'],
    cross: "cross", // cross or bround
    random: 10, // or null,
    g: 1, // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };
  return (
    <>
      <div className="login-container">
        <ParticlesBg
          type="cobweb"
          num={50}
          bg={true}
          color="#Eccf1b"
          //   config={config}
        />
        <div className="login-signup-container mb4">
          <h1 onClick={toggleLogin}>Login</h1>
          <div id="line"></div>
          <h1 onClick={toggleLogin}>Sign Up</h1>
        </div>
        {signUp ? <SignUp /> : <Login />}
      </div>
    </>
  );
};

export const Login = () => {
  return (
    <div className="card-container">
      <form className="form-container">
        <input
          placeholder="email address"
          type="email"
          name="email"
          id="email"
          required
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          id="password"
          minLength={8}
          required
        />
        {/* need to learn how to properly navigate SPA with redux, react, router,
        Links, etc */}
        {/* <Link to="/"> */} <button>Continue</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export const SignUp = () => {
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  // ////////////////////////////
  // * regex requires at least 1
  // number
  // uppercase letter
  // lowercase letter
  // special char
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%&*+,-.:;<=>?@^_]).*$/;
  // ////////////////////////////

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const confirmPassword = () => {
    const confirm = document.getElementById("confirm-password").value;
    if (confirm === password && confirm.match(regex)) {
      console.log("success");
    } else {
      console.log("failed");
    }
  };

  return (
    <div className="card-container">
      <form className="form-container">
        <input
          placeholder="first name"
          type="text"
          name="fname"
          id="fname"
          required
        />
        <input
          placeholder="last name"
          type="text"
          name="lname"
          id="lname"
          required
        />
        <input
          placeholder="email address"
          type="email"
          name="email"
          id="email"
          required
        />
        <input
          onChange={handleChange}
          placeholder="password"
          type="password"
          name="password"
          id="password"
          minLength={8}
          required
        />{" "}
        <input
          placeholder="confirm password"
          type="password"
          name="confirm-password"
          id="confirm-password"
          minLength={8}
          required
        />
        {/* need to learn how to properly navigate SPA with redux, react, router,
        Links, etc */ }
        {/* <Link to="/"> */}
        <button onClick={confirmPassword}>Continue</button>
        {/* </Link> */}
      </form>
    </div>
  );
};
