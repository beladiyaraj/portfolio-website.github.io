import React, { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./About.css";

const About = forwardRef((props, aboutRef) => {
  const animationRef = useRef(null); // Another ref specific to this component
  const isInView = useInView(animationRef, { once: false }); // Trigger animation once when in view

  return (
    <section
      className="container"
      ref={aboutRef} // Combine homeRef and localRef

    >
      <motion.div
        className="wrapper aboutWrapper"
        ref={animationRef} // Combine homeRef and localRef
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
        <span className="aboutTitle">
          <h3>AWS Cloud Engineer</h3>
          <div className="titleUnderline" />
        </span>
        <span className="aboutDetails">
          <p>
            Hello, I am an AWS Cloud Engineer with 2–3 years of experience in
            AWS Cloud Resource Configuration, Infrastructure management, and
            Maintenance. I am a certified AWS Cloud Practitioner, proficient in
            designing and maintaining scalable and secure cloud environments. As
            a DevOps professional, I have extensive experience with open-source
            tools such as Docker, Jenkins, Git, and Kubernetes, enabling
            efficient automation and CI/CD pipelines. Additionally, I am skilled
            in backend development using Python, with expertise in developing
            robust APIs leveraging FastAPI and Flask frameworks. My passion lies
            in creating efficient, scalable, and cost-effective solutions,
            combining the power of cloud technologies and software development
            best practices.
          </p>
        </span>
        <div className="quickFactsContainer">
          <div style={{ width: "fit-content" }}>
            <h3>Quick Facts</h3> <div className="sub-title-underline" />
          </div>
          <div className="factsList">
            <div className="factItem">
              <span className="factIcon">📍</span>
              <span className="factText">
                <strong>Location:</strong> Gujarat, India
              </span>
            </div>
            <div className="factItem">
              <span className="factIcon">💻</span>
              <span className="factText">
                <strong>Qualification:</strong> Computer Engineer
              </span>
            </div>
            <div className="factItem">
              <span className="factIcon">🏢</span>
              <span className="factText">
                <strong>Profession:</strong> Full-Time Freelancer
              </span>
            </div>
          </div>
        </div>

        <span className="skills-wrapper">
          <div style={{ width: "fit-content" }}>
            <h3>Skills</h3> <div className="sub-title-underline" />
          </div>
          <div className="skillsContainer">
            <div className="skillsCategory">
              <h5>Cloud Tools</h5>
              {[
                "AWS CodePipeline",
                "AWS Lambda",
                "Amazon Web Services",
                "Amazon RDS",
              ].map((skill, index) => (
                <motion.span
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#878686", // Change background color on hover
                    transition: { duration: 0.01 },
                  }}
                  key={index}
                  className="skillPill"
                  whileTap={{
                    scale: 1,
                    backgroundColor: "#878686",
                    transition: { duration: 0.01 },
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="skillsCategory">
              <h5>Programming</h5>
              {["Python", "Node.js", "Linux", "Raspberry Pi"].map(
                (skill, index) => (
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#878686",
                      transition: { duration: 0.01 },
                    }}
                    key={index}
                    className="skillPill"
                    whileTap={{
                      scale: 1,
                      backgroundColor: "#878686",
                      transition: { duration: 0.01 },
                    }}
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
            <div className="skillsCategory">
              <h5>Other Skills</h5>
              {["Web Scraping", "MySQL", "DevOps", "Internet of Things"].map(
                (skill, index) => (
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#878686",
                      transition: { duration: 0.01 },
                    }}
                    key={index}
                    className="skillPill"
                    whileTap={{
                      scale: 1,
                      backgroundColor: "#878686",
                      transition: { duration: 0.01 },
                    }}
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </span>
      </motion.div>
    </section>
  );
});

export default About;
