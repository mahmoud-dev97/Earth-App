import { useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import moon from "../Assets/Images/destination/image-moon.png";
import mars from "../Assets/Images/destination/image-mars.png";
import europa from "../Assets/Images/destination/image-europa.png";
import titan from "../Assets/Images/destination/image-titan.png";

function Destination() {
  const moonObj = {
    img: moon,
    title: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avg: "384,400 km",
    est: "3 days",
  };
  const marsObj = {
    img: mars,
    title: "MARS",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avg: "225 MIL. km",
    est: "9 months",
  };
  const europaObj = {
    img: europa,
    title: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avg: "628 MIL. km",
    est: "3 years",
  };
  const titanObj = {
    img: titan,
    title: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avg: "1.6 BIL. km",
    est: "7 years",
  };
  const [content, setContent] = useState(moonObj);

  return (
    <Row
      id="destination"
      className="justify-content-center align-items-lg-center align-content-center m-0"
    >

      <Col lg={4} sm={12} className="text-center text-lg-start p-0">
        <img className="img-fluid" src={content.img} alt={content.title} />
      </Col>
      <Col lg={4} sm={12} className="text-center text-lg-start p-0">
        <Nav className="justify-content-center justify-content-lg-start">
          <Nav.Item>
            <Nav.Link
              className={content.title === "MOON" ? "active" : ""}
              onClick={() => setContent(moonObj)}
            >
              MOON
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "MARS" ? "active" : ""}
              onClick={() => setContent(marsObj)}
            >
              MARS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "EUROPA" ? "active" : ""}
              onClick={() => setContent(europaObj)}
            >
              EUROPA
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "TITAN" ? "active" : ""}
              onClick={() => setContent(titanObj)}
            >
              TITAN
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h1 className="text3">{content.title}</h1>
        <p className="text2 pb-2">{content.text}</p>
        <Row className="border-top pt-4 justify-content-lg-between mb-4 mb-lg-0">
          <Col sm={12} md={6}>
            <p>AVG. DISTANCE</p>
            <h2>{content.avg}</h2>
          </Col>
          <Col sm={12} md={6}>
            <p>Est. travel time</p>
            <h2>{content.est}</h2>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Destination;
