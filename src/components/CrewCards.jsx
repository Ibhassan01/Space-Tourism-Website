import "../CrewCards.css";
import PropTypes from "prop-types";
const CrewCards = ({ src, crewTitle, crewName, crewAbout, onCrewClick }) => {
  return (
    <div className="crewCards_container">
      <div className="crewCards_container_mobile">
      <p className="cardTitle_mobile">
        <span>02</span> MEET YOUR CREW
      </p>
      <div className="img_crew_container">
        <img
          className="crew"
          src={src}
          alt="profile"
          width="220px"
          height="300px"
        />
      </div>
      <ul className="nav">
        <li>
          <div className="one" onClick={() => onCrewClick("first")}></div>
        </li>
        <li>
          <div className="two" onClick={() => onCrewClick("second")}></div>
        </li>
        <li>
          <div className="three" onClick={() => onCrewClick("third")}></div>
        </li>
        <li>
          <div className="four" onClick={() => onCrewClick("fourth")}></div>
        </li>
      </ul>
      <div className="info_container">
        <p className="crew_title">{crewTitle}</p>
        <p className="crew_name">{crewName}</p>
        <p className="crew_about">{crewAbout}</p>
      </div>
      </div>
      {/*----------------------Tablet VIEW-------------------------*/}
      <div className="crewCards_container_tab">
        <p className="cardTitle_tab">
          <span>02</span> MEET YOUR CREW
        </p>
        <div className="tab_view">
          <div className="tab_view_one">
            <div className="info_container_tab">
              <p className="crew_title_tab">{crewTitle}</p>
              <p className="crew_name_tab">{crewName}</p>
              <p className="crew_about_tab">{crewAbout}</p>
            </div>
            <ul className="nav_tab">
              <li>
                <div className="one" onClick={() => onCrewClick("first")}></div>
              </li>
              <li>
                <div className="two" onClick={() => onCrewClick("second")}></div>
              </li>
              <li>
                <div className="three" onClick={() => onCrewClick("third")}></div>
              </li>
              <li>
                <div className="four" onClick={() => onCrewClick("fourth")}></div>
              </li>
            </ul>
          </div>
          <div className="img_crew_container_tab">
            <img
              className="crew_tab"
              src={src}
              alt="profile"
              width="550px"
              height="600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CrewCards.propTypes = {
  src: PropTypes.string.isRequired,
  crewTitle: PropTypes.string.isRequired,
  crewName: PropTypes.string.isRequired,
  crewAbout: PropTypes.string.isRequired,
  onCrewClick: PropTypes.func.isRequired,
};
export default CrewCards;
