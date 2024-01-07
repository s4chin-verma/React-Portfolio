import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Project";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      {/* <TechStack />
      <Footer />  */}
    </>
  )
}