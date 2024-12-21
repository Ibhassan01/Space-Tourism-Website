import { useState } from "react";
import { Link } from 'react-router-dom'
import Logo from "../../public/shared/logo.svg";
import closeIcon from "../../public/shared/icon-close.svg";
import MenuIcon from "../../public/shared/icon-hamburger.svg";
import "../header.css";
const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleClose = () =>{
        setOpen(false)
    }

    return (
    <div>
        <div className="header">
        <img 
            className="logo"
            src={Logo} 
            alt="website icon" 
            width="40px" 
            height="40px" 
        />
        <img
            className="menu_bar"
            src={MenuIcon}
            alt="menu icon"
            width="35px"
            height="25px"
            onClick={handleOpen}
            />
            <div className="tab_menu">
                <ul className="tab_nav">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/Destination">DESTINATION</Link></li>
                    <li><Link to="/Crew">CREW</Link></li>
                    <li><Link to="/Technology">TECHNOLOGY</Link></li>
                </ul>
            </div>
            <div className="desktop_menu">
                <ul className="desktop_nav">
                    <li><Link to="/"><span>00</span>HOME</Link></li>
                    <li><Link to="/Destination"><span>01</span>DESTINATION</Link></li>
                    <li><Link to="/Crew"><span>02</span>CREW</Link></li>
                    <li><Link to="/Technology"><span>03</span>TECHNOLOGY</Link></li>
                </ul>
            </div>
        </div>
        {/* ------------------SIDEBAR---------------- */}
        <div className={`sideBar ${open ? "sideBar_open" : ""}`}>
        <img 
            width="35px"
            height="35px"
            src={closeIcon} 
            alt="close icon" 
            onClick={handleClose}
        />
        <ul>
            <li><Link to="/" onClick={handleClose}><span className="number">00</span>HOME</Link></li>
            <li><Link to="/Destination" onClick={handleClose}><span className="number">01</span>DESTINATION</Link></li>
            <li><Link to="/Crew" onClick={handleClose}><span className="number">02</span>CREW</Link></li>
            <li><Link to="/Technology" onClick={handleClose}><span className="number">03</span>TECHNOLOGY</Link></li>
        </ul>
        </div>
    </div>
    );
};

export default Header;
