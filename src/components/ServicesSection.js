// Import Icons

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> service.
        </h2>
        <div className="cards">
          <div className="card">
            <img src={clock} alt="clock" />
            <h3>Efficient</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <img src={teamwork} alt="teamwork" />
            <h3>Teamwork</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <img src={diaphragm} alt="diaphragm" />
            <h3>Diaphragm</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <img src={money} alt="money" />
            <h3>Affordable</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="image">
          <img src={home2} alt="professional camera" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
