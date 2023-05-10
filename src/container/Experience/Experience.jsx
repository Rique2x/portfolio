import { React } from "react";
import { motion } from "framer-motion";
import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import {
    faComputer
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="container-experience" id="experience">
      <motion.div
        className="container"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
      >
        <h1>SE Experience</h1>
        <div className="boxes">
          <div className="box">
            <FontAwesomeIcon
              icon={faComputer}
              className="icon"
              title={"LinkedIn"}
            />
            <h2>The Odin Project</h2>
            <p className="text-container">2022-present</p>
            The education includes comprehensive tutorials, 
            interactive coding challenges, and projects that 
            are designed to simulate real-world programming 
            scenarios. The Odin Project covers a wide range 
            of topics, including HTML, CSS, JavaScript, Ruby, 
            Ruby on Rails, SQL, Git, and more.
          </div>
        </div>
        <motion.div
          className="button-container"
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
        >
        </motion.div>
        <div className="divider-experience"></div>
      </motion.div>
    </div>
  );
};

export default Experience;