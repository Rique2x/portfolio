import { React } from "react";
import { motion } from "framer-motion";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="container-skills">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
      >
      </motion.div>
    </div>
  );
};

export default Skills;