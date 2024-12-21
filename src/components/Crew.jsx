import Header from "./Header";
import '../crew.css'
import CrewCards from "./CrewCards";
import { useState } from "react";

const Crew = () => {
    const [selectedCrew, setSelectedCrew] = useState({
        src: "/crew/image-douglas-hurley.png",
        crewTitle: "COMMANDER",
        crewName: 'DOUGLAS HURLEY',
        crewAbout: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    })

    const crewData = {
        first: {
            src: "/crew/image-douglas-hurley.png",
            crewTitle: "COMMANDER",
            crewName: 'DOUGLAS HURLEY',
            crewAbout: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        second: {
            src: "/crew/image-mark-shuttleworth.png",
            crewTitle: 'MISSION SPECIALIST',
            crewName: 'MARK SHUTTLEWORTH',
            crewAbout: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        third: {
            src: "/crew/image-victor-glover.png",
            crewTitle: "PILOT",
            crewName: "VICTOR GLOVER",
            crewAbout: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
        },
        fourth: {
            src: "/crew/image-anousheh-ansari.png",
            crewTitle: "FLIGHT ENGINEER",
            crewName: "ANOUSHEH ANSARI",
            crewAbout: "Flight Engineer Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        }
    }

    const handleCrewClick = (crewName) => {
        setSelectedCrew(crewData[crewName]);
    }

    return (
        <div className="Crew_container">
            <Header/>
            <CrewCards
                src={selectedCrew.src}
                crewTitle={selectedCrew.crewTitle}
                crewName={selectedCrew.crewName}
                crewAbout={selectedCrew.crewAbout}
                onCrewClick={handleCrewClick}
            />
        </div>
    );
}
 
export default Crew;