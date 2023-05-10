import { React } from "react";
import { motion } from "framer-motion";

import "./About.scss";

const About = () => {
  return (
    <>
      <div className="container-about" id="about">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
          className="title"
        >
          <h1>About Me</h1>
          <p className="title-text">
          Hi, my name is Enrique Hoebeb and I am a 22-year-old self-taught 
          full-stack developer who embarked on my programming journey just 
          8 months ago through The Odin Project. Hailing from the beautiful 
          town of Arandis, Namibia, I have shown remarkable dedication and 
          passion in my pursuit of learning to code. Thanks to The Odin Project, 
          I have developed a solid foundation in web development and have been 
          working diligently to improve my skills in both front-end and back-end 
          development.
          </p>
          <p className="title-text">
          My passion lies in programming, new technology, and all things IT-related. 
          I am always eager to tackle new challenges, and if you have any job 
          opportunities you'd like to discuss with me for the summer or fall of 2023, 
          please don't hesitate to reach out. This website serves as a complement to 
          my CV, so feel free to check that out as well. Below, you'll find a list of 
          some of the technologies and projects I've had the pleasure of working with.
          </p>
        </motion.div>
      </div>
    </>
  );
};
export default About;