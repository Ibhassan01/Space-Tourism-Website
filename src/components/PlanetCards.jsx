import "../PlanetCards.css";
import PropTypes from "prop-types";

const PlanetCards = ({
    src,
    planetName,
    aboutPlanet,
    avgDistance,
    travelTime,
    onPlanetClick,
}) => {
    return (
    <div className="planetCards_container">
        <div className="planetCards_contents">
            <p className="planetCards_title">
            <span>01</span> PICK YOUR DESTINATION
            </p>
            <div className="desktop">
            <div className="desktop_layout_one">
                <img
                    className="planetImg"
                    src={src}
                    alt="Planet image"
                    height="250px"
                    width="250px"
                />
            </div>
            <div className="desktop_layout_two">
                <ul className="planetNav">
                    <li>
                        <p onClick={() => onPlanetClick("MOON")}>MOON</p>
                    </li>
                    <li>
                        <p onClick={() => onPlanetClick("MARS")}>MARS</p>
                    </li>
                    <li>
                        <p onClick={() => onPlanetClick("EUROPA")}>EUROPA</p>
                    </li>
                    <li>
                        <p onClick={() => onPlanetClick("TITAN")}>TITAN</p>
                    </li>
                </ul>

                <p className="planet_name">{planetName}</p>
                <p className="planet_about">{aboutPlanet}</p>
                <div className="footer">
                    <div className="footer_one">
                        <span className="avg">AVG. DISTANCE</span>
                        <p className="distance">{avgDistance} KM</p>
                    </div>
                    <div className="footer_two">
                        <span className="est">EST. TRAVEL TIME</span>
                        <p className="time">{travelTime}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

PlanetCards.propTypes = {
    src: PropTypes.string.isRequired,
    planetName: PropTypes.string.isRequired,
    aboutPlanet: PropTypes.string.isRequired,
    avgDistance: PropTypes.string.isRequired,
    travelTime: PropTypes.string.isRequired,
    onPlanetClick: PropTypes.func.isRequired,
};

export default PlanetCards;
