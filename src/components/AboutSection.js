import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
