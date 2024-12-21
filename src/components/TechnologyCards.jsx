import "../technologyCards.css";
import PropTypes from "prop-types";
const TechnologyCards = ({ src, techName, techAbout, onTechClick }) => {
  return (
    <div className="technologyCards_container">
      <div className="mobile_view">
        <p className="cardTitle">
          <span>03</span> SPACE LAUNCH 101
        </p>
        <div
          className="img_container"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <ul className="number_nav">
          <li className="first" onClick={() => onTechClick("first")}>
            1
          </li>
          <li className="second" onClick={() => onTechClick("second")}>
            2
          </li>
          <li className="third" onClick={() => onTechClick("third")}>
            3
          </li>
        </ul>
        <div className="about_container">
          <p className="terminologies">THE TERMINOLOGY....</p>
          <p className="tech_name">{techName}</p>
          <p className="tech_about">{techAbout}</p>
        </div>
      </div>
      {/*--------------------DESKTOP VIEW-------------------------*/}
      <div className="desktop_view">
        <p className="cardTitle">
          <span>03</span> SPACE LAUNCH 101
        </p>
        <div className="desktop_view_container">
          <div className="desktop_view_one">
            <ul className="desktop_number_nav">
              <li className="first" onClick={() => onTechClick("first")}>
                1
              </li>
              <li className="second" onClick={() => onTechClick("second")}>
                2
              </li>
              <li className="third" onClick={() => onTechClick("third")}>
                3
              </li>
            </ul>
            <div className="desktop_about_container">
              <p className="terminologies">THE TERMINOLOGY....</p>
              <p className="tech_name">{techName}</p>
              <p className="tech_about">{techAbout}</p>
            </div>
          </div>
          <img 
            src={src}  
            alt=""
            height='550px'
            width='650px'
          />
        </div>
      </div>
    </div>
  );
};

TechnologyCards.propTypes = {
  src: PropTypes.string.isRequired,
  techName: PropTypes.string.isRequired,
  techAbout: PropTypes.string.isRequired,
  onTechClick: PropTypes.func.isRequired,
};
export default TechnologyCards;
