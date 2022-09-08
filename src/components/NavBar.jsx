import { useState } from "react";
import "../Styles/Nav.scss";
import logo from "../Assets/Images/shared/logo.svg";
import burger from "../Assets/Images/shared/icon-hamburger.svg";
import close from "../Assets/Images/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import back1 from "../Assets/Images/home/background-home-desktop.jpg";
import back2 from "../Assets/Images/destination/background-destination-desktop.jpg";
import back3 from "../Assets/Images/crew/background-crew-desktop.jpg";
import back4 from "../Assets/Images/technology/background-technology-desktop.jpg";
import back1mob from "../Assets/Images/home/background-home-mobile.jpg";
import back2mob from "../Assets/Images/destination/background-destination-mobile.jpg";
import back3mob from "../Assets/Images/crew/background-crew-mobile.jpg";
import back4mob from "../Assets/Images/technology/background-technology-mobile.jpg";

function NavBar({ setBack }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="burger">
          <img src={burger} alt="burger" onClick={handleShow} />
        </div>
        <div className="item">
          <li>
            <NavLink onClick={() => setBack(back1)} to="/">
              00 HOME
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setBack(back2)} to="/destination">
              01 DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setBack(back3)} to="/crew">
              02 CREW
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setBack(back4)} to="/technology">
              04 TECHNOLOGY
            </NavLink>
          </li>
        </div>
      </div>
      <Offcanvas placement={"end"} show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <img src={close} alt="close" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="item">
            <li>
              <NavLink onClick={() => setBack(back1mob)} to="/">00 HOME</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setBack(back2mob)} to="/destination">01 DESTINATION</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setBack(back3mob)} to="/crew">02 CREW</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setBack(back4mob)} to="/technology">04 TECHNOLOGY</NavLink>
            </li>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
