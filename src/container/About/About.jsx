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
          full-stack developer who embarked on my programming journey through The 
          Odin Project. Originally from the beautiful town of Arandis, Namibia, 
          but residing in Canada I have shown remarkable dedication and passion in 
          my pursuit of learning to code. Thanks to The Odin Project,I have developed 
          a solid foundation in web development and have been working diligently to 
          improve my skills in both front-end and back-end development.
          </p>
          <p className="title-text">
          My passion lies in programming, new technology, and all things IT-related. 
          I am always eager to tackle new challenges, and if you have any job opportunities 
          you'd like to discuss with me for the summer or fall of 2023, please don't 
          hesitate to reach out. 
          </p>
          <p className="title-text">
          I am available for gigs and freelancing projects. If you have any 
          short-term assignments or specific tasks that require programming expertise, 
          I'm more than happy to discuss them with you. Whether it's a small project or a 
          one-time task, I'm open to considering various opportunities. Please don't hesitate 
          to reach out if you need assistance with your programming or IT-related needs.
          Below, you'll find a list of some of the technologies and projects I've had the 
          pleasure of working with.
          </p>
        </motion.div>
      </div>
    </>
  );
};
export default About;
