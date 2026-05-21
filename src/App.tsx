import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Edu from "./components/Education";
import Skill from "./components/Skills";
import Con from "./components/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Counter from "./components/Counter";
// import Data from "./components/Data";
function App() {
  return (
    <>
      <Home />
      <About />
      <Edu />
      <Skill />
      <Con />
      <Navbar />
      <Footer />
      {/* <Counter />
      <Data />  */}
    </>
  );
}

export default App;