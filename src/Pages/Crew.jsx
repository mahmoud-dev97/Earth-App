import { useState } from "react";
import "../Styles/Crew.scss";
import { Row, Col, Nav } from "react-bootstrap";
import imgOne from "../Assets/Images/crew/image-douglas-hurley.png";
import imgTwo from "../Assets/Images/crew/image-mark-shuttleworth.png";
import imgThree from "../Assets/Images/crew/image-victor-glover.png";
import imgFour from "../Assets/Images/crew/image-anousheh-ansari.png";
import { VscCircleFilled } from "react-icons/vsc";
function Crew() {
  const ObjOne = {
    img: imgOne,
    title: "Douglas Hurley",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    worktitle: "Commander",
  };
  const ObjTwo = {
    img: imgTwo,
    title: "MARK SHUTTLEWORTH",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    worktitle: "Mission Specialist",
  };
  const ObjThree = {
    img: imgThree,
    title: "Victor Glover",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    worktitle: "PILOT",
  };
  const ObjFour = {
    img: imgFour,
    title: "Anousheh Ansari",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    worktitle: "Flight Engineer",
  };
  const [content, setContent] = useState(ObjOne);

  return (
    <Row
      id="crew"
      className="justify-content-center align-items-lg-center align-content-center m-0"
    >

      <Col
        lg={4}
        sm={12}
        className="text-center text-lg-start p-0 d-md-none d-block"
      >
        <img className="img-fluid" src={content.img} alt={content.title} />
      </Col>
      <Col lg={5} sm={12} className="text-center text-lg-start p-0">
        <h1 className="text4">{content.worktitle}</h1>
        <h1 className="text3">{content.title}</h1>
        <p className="text2 pb-2">{content.text}</p>
        <Nav className="justify-content-center justify-content-lg-start">
          <Nav.Item>
            <Nav.Link
              className={content.title === "Douglas Hurley" ? "active" : ""}
              onClick={() => setContent(ObjOne)}
            >
              <VscCircleFilled />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "MARK SHUTTLEWORTH" ? "active" : ""}
              onClick={() => setContent(ObjTwo)}
            >
              <VscCircleFilled />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "Victor Glover" ? "active" : ""}
              onClick={() => setContent(ObjThree)}
            >
              <VscCircleFilled />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "Anousheh Ansari" ? "active" : ""}
              onClick={() => setContent(ObjFour)}
            >
              <VscCircleFilled />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col
        lg={4}
        sm={12}
        className="text-center text-lg-start d-none d-md-block"
      >
        <img className="img-fluid" src={content.img} alt={content.title} />
      </Col>
    </Row>
  );
}

export default Crew;
