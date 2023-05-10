import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Header.scss";
import AnimatedLetters from "../../components/AnimatedLetters/Letters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "E", "n", "r", "i", "q", "u", "e"];
  // const jobArray = ["I", "T", " ", "S", "t", "u", "d", "e", "n", "t", "."];
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const { ref, inView } = useInView({ threshold: 0.8 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {},
      });
    }
    if (!inView) {
      animation.start({
        y: "-100vh",
      });
    }
  });

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
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            {/* <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /> */}
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
        <div ref={ref}>
          <motion.svg className="arrows" animate={animation}>
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </motion.svg>
        </div>
      </div>
    </>
  );
};

export default Header;