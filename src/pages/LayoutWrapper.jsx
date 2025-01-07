import React, { useRef } from "react";

import "./LayoutWrapper.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";

function LayoutWrapper() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (ref) => {
    // console.log("Ref value:", ref?.current); // Debug log
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="layoutWrapper">
      {/* <Navbar /> */}
      <div className="mainLayoutWrapper">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Services ref={servicesRef} />
      </div>
      <div className="sideLayoutWrapper">
        <Sidebar
          onNavigate={scrollToSection}
          refs={{ homeRef, aboutRef, projectsRef, servicesRef }}
        />
      </div>
    </div>
  );
}
export default LayoutWrapper;
