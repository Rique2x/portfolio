import { motion } from "framer-motion";
import "./Header.scss";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  // const jobArray = ["I", "T", " ", "S", "t", "u", "d", "e", "n", "t", "."];
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container-header home-page" id="home">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
           
          </h1>
          <h2>Full-Stack Developer</h2>

          <motion.div
            id="icons"
            animate={{ rotate: 360 }}
            transition={{ type: "spring", duration: 4.5, bounce: 0.8 }}
          >
            <a href="https://twitter.com/rique_xix">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="linkedIn"
                  title={"LinkedIn"}
                />
              </motion.button>
            </a>
            <a href="https://github.com/Rique2x">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="btn"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="github"
                  title={"Github"}
                />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;