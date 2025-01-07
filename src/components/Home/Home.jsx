import React, { forwardRef, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";

import "./Home.css";

import profileImage from "../../assets/images/rajbeladiyaprofile.jpg";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Home = forwardRef((props, homeRef) => {
  const animationRef = useRef(null); // Another ref specific to this component
  const isInView = useInView(animationRef, { once: false }); // Trigger animation once when in view

  function mergeRefs(...refs) {
    return (node) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      });
    };
  }

  const handleRedirect = (url) => {
    window.open(url, "_blank"); // Opens the URL in a new tab
  };

  return (
    <motion.section
      className="container"
      ref={mergeRefs(homeRef, animationRef)} // Combine homeRef and localRef
      initial={{ opacity: 0, y: 0 }} // Initial animation state
      animate={
        isInView
          ? {
              x: 0,
              opacity: 1,
              transition: {
                default: { type: "spring" },
                opacity: { ease: "linear" },
              },
            }
          : {}
      } // Animate when in view
      transition={{ duration: 1 }}
    >
      <span className="wrapper">
        <motion.section
          className="profileSection"
          initial={{ opacity: 0, y: 50 }} // Slide in from bottom
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0, // Move to position
                  transition: { duration: 0.5 },
                }
              : {}
          }
        >
          <img
            src={profileImage}
            alt="rajbeladiyaprofile"
            className="profileImage"
          />
        </motion.section>
        <section className="introductionSection">
          <motion.h1
            initial={{ opacity: 0, y: 50 }} // Slide in from bottom
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0, // Move to position
                    transition: { duration: 0.5 },
                  }
                : {}
            }
          >
            Raj Beladiya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // Slide in from bottom
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0, // Move to position
                    transition: { duration: 0.5 },
                  }
                : {}
            }
          >
            I'm{" "}
            <i>
              <Typewriter
                words={[
                  "AWS Cloud Engineer",
                  "Freelancer",
                  "IoT Enthusiastic",
                  "Web Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </i>
          </motion.p>
          <div className="social-icons-section">
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Slide in from bottom
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    }
                  : {}
              }
            >
              <FaLinkedin
                style={{ color: "#0A66C2" }}
                className="social-icons"
                onClick={() =>
                  handleRedirect("https://www.linkedin.com/in/raj-beladiya/")
                }
              />
              <FaSquareUpwork
                style={{ color: "#fff" }}
                className="social-icons"
                onClick={() =>
                  handleRedirect(
                    "https://www.upwork.com/freelancers/beladiyaraj"
                  )
                }
              />
              <FaGithub
                style={{ color: "#6e5494" }}
                className="social-icons"
                onClick={() => handleRedirect("https://github.com/beladiyaraj")}
              />
              <TbBrandFiverr
                style={{ color: "#00b22d" }}
                className="social-icons"
                onClick={() =>
                  handleRedirect(
                    "https://www.fiverr.com/raj4________?public_mode=true"
                  )
                }
              />
            </motion.div>
          </div>
        </section>
      </span>
    </motion.section>
  );
});

export default Home;
