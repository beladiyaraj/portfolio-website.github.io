import React from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";

import { GoDotFill } from "react-icons/go";

const Sidebar = ({ onNavigate, refs }) => {
  const { homeRef, aboutRef, projectsRef, servicesRef } = refs;

  const pageLoadVariants = {
    hidden: { opacity: 0, x: 20 }, // Starts invisible and slightly below
    visible: { opacity: 1, x: 0 }, // Fades in and moves into place
  };

  const textVariants = {
    rest: { x: 0 }, // Text stays in place initially
    hover: { x: 10 }, // Text slides slightly to the right
  };

  const dotVariants = {
    hidden: { opacity: 0, x: -10 }, // Dot hidden and shifted left
    visible: { opacity: 0, x: 0 }, // Dot not visible during page load
    hover: { opacity: 1, x: 0 }, // Dot stays visible on hover
  };

  const transitionSettings = { duration: 0.2 }; // Shared transition settings

  return (
    <div className="sidebar">
      <ul className="links">
        {/* Home Link */}
        <motion.li
          initial="hidden" // Starts in the hidden state
          animate="visible" // Animates to the visible state on page load
          whileHover="hover" // Applies hover animation dynamically
          variants={pageLoadVariants} // Combined variants
          transition={{ duration: 0.1, delay: 0.1 }} // Customize animation timing
          className="socials"
        >
          <motion.span variants={dotVariants} transition={transitionSettings}>
            <GoDotFill style={{ width: "1.5em", height: "1.5em" }} />
          </motion.span>
          <motion.a
            onClick={() => onNavigate(homeRef)}
            variants={textVariants}
            transition={transitionSettings}
          >
            Home
          </motion.a>
        </motion.li>

        {/* About Link */}
        <motion.li
          initial="hidden" // Starts in the hidden state
          animate="visible" // Animates to the visible state on page load
          whileHover="hover" // Applies hover animation dynamically
          variants={pageLoadVariants} // Combined variants
          transition={{ duration: 0.1, delay: 0.2 }} // Customize animation timing
          className="socials"
        >
          <motion.span variants={dotVariants} transition={transitionSettings}>
            <GoDotFill style={{ width: "1.5em", height: "1.5em" }} />
          </motion.span>
          <motion.a
            onClick={() => onNavigate(aboutRef)}
            variants={textVariants}
            transition={transitionSettings}
          >
            About
          </motion.a>
        </motion.li>

        {/* Projects Link */}
        <motion.li
          initial="hidden" // Starts in the hidden state
          animate="visible" // Animates to the visible state on page load
          whileHover="hover" // Applies hover animation dynamically
          variants={pageLoadVariants} // Combined variants
          transition={{ duration: 0.1, delay: 0.3 }} // Customize animation timing
          className="socials"
        >
          <motion.span variants={dotVariants} transition={transitionSettings}>
            <GoDotFill style={{ width: "1.5em", height: "1.5em" }} />
          </motion.span>
          <motion.a
            onClick={() => onNavigate(projectsRef)}
            variants={textVariants}
            transition={transitionSettings}
          >
            Projects
          </motion.a>
        </motion.li>

        {/* Contact Me Link */}
        <motion.li
          initial="hidden" // Starts in the hidden state
          animate="visible" // Animates to the visible state on page load
          whileHover="hover" // Applies hover animation dynamically
          variants={pageLoadVariants} // Combined variants
          transition={{ duration: 0.1, delay: 0.4 }} // Customize animation timing
          className="socials"
        >
          <motion.span variants={dotVariants} transition={transitionSettings}>
            <GoDotFill style={{ width: "1.5em", height: "1.5em" }} />
          </motion.span>
          <motion.a
            onClick={() => onNavigate(servicesRef)}
            variants={textVariants}
            transition={transitionSettings}
          >
            Services
          </motion.a>
        </motion.li>
      </ul>
    </div>
  );
};

export default Sidebar;
