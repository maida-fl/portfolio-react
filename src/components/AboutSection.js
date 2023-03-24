import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas you have. <br />{" "}
          We have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="professional with camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
