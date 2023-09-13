import React, { useState } from "react";
import "./Login.css";

export const LoginModal = () => {
  const [signUp, setSignUp] = useState(false);
  const toggleLogin = () => {
    setSignUp(!signUp);
  }
  return (
    <>
      <div className="login-container">
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
        <button>Continue</button>
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
        <button onClick={confirmPassword}>Continue</button>
      </form>
    </div>
  );
};
