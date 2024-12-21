import { useState } from "react";
import "../Destination.css";
import Header from "./Header";
import PlanetCards from "./PlanetCards";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState({
    src: "/destination/image-moon.png",
    planetName: "MOON",
    aboutPlanet:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you are there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400",
    travelTime: "3 DAYS",
  });

  const planetsData = {
    MOON: {
      src: "/destination/image-moon.png",
      planetName: "MOON",
      aboutPlanet:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you are there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400",
      travelTime: "3 DAYS",
    },
    MARS: {
      src: "/destination/image-mars.png",
      planetName: "MARS",
      aboutPlanet:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "225 MIL",
      travelTime: "9 MONTHS",
    },
    EUROPA: {
      src: "/destination/image-europa.png",
      planetName: "EUROPA",
      aboutPlanet:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL",
      travelTime: "6 YEARS",
    },
    TITAN: {
      src: "/destination/image-titan.png",
      planetName: "TITAN",
      aboutPlanet:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDistance: "1.6 BIL",
      travelTime: "7 YEARS",
    },
  };

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet(planetsData[planetName]);
  };

  return (
    <div className="destination_container">
      <Header />
      <PlanetCards
        src={selectedPlanet.src}
        planetName={selectedPlanet.planetName}
        aboutPlanet={selectedPlanet.aboutPlanet}
        avgDistance={selectedPlanet.avgDistance}
        travelTime={selectedPlanet.travelTime}
        onPlanetClick={handlePlanetClick}
      />
    </div>
  );
};

export default Destination;
