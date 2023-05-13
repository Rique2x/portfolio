import React from "react";
import { motion } from "framer-motion";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import ReusableButton from "../../components/Buttons/ReusableButton";
import shoppingCart from "../../assets/shopping-cart.gif";
import Battleship from "../../assets/battleship.png";
import WeatherApp from "../../assets/weatherApp.png";
import MemoryGame from "../../assets/memoryGame.gif";

const SwiperSlideContent = (props) => {
  const { project1, project2, project3, project4, project5 } = props;
  let project = {};
  let image = {};
  let name = "";
  let link = "";
  let view = "";

  if (project1) {
    name = "Shopping-Cart";
    image = shoppingCart;
    project = project1;
    link = "https://github.com/Rique2x/React-Shopping-Cart";
    view = "https://rique2x.github.io/React-Shopping-Cart";
  } else if (project2) {
    project = project2;
    name = "Battleship";
    image = Battleship;
    link = "https://github.com/Rique2x/Battleship";
    view = "https://rique2x.github.io/Battleship";
  } else if (project3) {
    project = project3;
    image = MemoryGame;
    name = "Memory-Card";
    link = "https://github.com/Rique2x/React-Memory-Card";
    view = "https://rique2x.github.io/React-Memory-Card";
  } else if (project4) {
    project = project4;
    image = WeatherApp;
    name = "Weather-App";
    link = "https://github.com/Rique2x/Weather-App";
    view = "https://rique2x.github.io/Weather-App";
  }
   else if (project5) {
    project = project5;
    name = "Portfolio";
    link = "https://rique2x.github.io/Battleship";
  }
  return (
    <div className="project-body">
      <h2>{name}</h2>
      <ul className="project-icons">
        {project === project3 ? <RiFlutterFill className="altIcon" /> : null}
        {project === project3 ? <SiDart className="altIcon" id="dart" /> : null}

        {project.map((skills, i) => {
          return (
            <motion.li
              viewport={{ once: true }}
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "easein",
                duration: 1,
                delay: i * 0.15,
              }}
              key={i}
              className="skill"
              name={skills.skill}
            >
              <i className={skills.fontAwesome}></i>
            </motion.li>
          );
        })}
      </ul>
      
      <img src={image} id="project-img" alt="project" />
      <div className="btn">
      <ReusableButton
        className="project-button"
        onClick={() => window.open(`${link}`, "_blank")}
      >
        Show on Github
      </ReusableButton>
      <ReusableButton
        className="project-button"
        onClick={() => window.open(`${view}`, "_blank")}
      >
        Live
      </ReusableButton>
      </div>
    </div>
  );
};

export default SwiperSlideContent;