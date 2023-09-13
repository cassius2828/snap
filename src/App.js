import "./App.css";
import { Footer } from "./components/Footer/Footer";
// components
import { Nav } from "./components/Nav/Nav";
import { Main } from "./components/Main/Main";
import {LoginModal} from "./components/Login/Login";
import {useState} from "react";


function App() {
const [loginSuccess, setLoginSuccess] = useState(false);

  const toggleHam = () => {
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("side-menu");

    hamburger.classList.toggle("active");
    sideMenu.classList.toggle("slide-in");
  };

  return (
    <div className="App">
      {/* <Nav toggleHam={toggleHam} />
      <Main />
      <Footer /> */}
   <LoginModal
   
   />
    </div>
  );
}

// /////////////////////
// ! DROP MENU COMPONENT
// /////////////////////

export default App;

/*
ToDO List:
1: create login and sign up cards
a: put in particles for the background
b: set up routing for sign up and sign in
c: set up a basic server to track users
d: Create a profile picture and account settings page





*/
