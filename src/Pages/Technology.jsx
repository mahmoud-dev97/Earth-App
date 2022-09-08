import { useState } from "react";
import "../Styles/Technology.scss";
import { Row, Col, Nav } from "react-bootstrap";
import imgOne from "../Assets/Images/technology/image-launch-vehicle-portrait.jpg";
import imgTwo from "../Assets/Images/technology/image-spaceport-portrait.jpg";
import imgThree from "../Assets/Images/technology/image-space-capsule-portrait.jpg";
import imgOneland from "../Assets/Images/technology/image-launch-vehicle-landscape.jpg";
import imgTwoland from "../Assets/Images/technology/image-spaceport-landscape.jpg";
import imgThreeland from "../Assets/Images/technology/image-space-capsule-landscape.jpg";
import { TbCircle3, TbCircle2, TbCircle1 } from "react-icons/tb";
function Technology() {
  const ObjOne = {
    img: imgOne,
    land: imgOneland,
    title: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  };
  const ObjTwo = {
    img: imgTwo,
    land: imgTwoland,
    title: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  };
  const ObjThree = {
    img: imgThree,
    land: imgThreeland,
    title: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  };

  const [content, setContent] = useState(ObjOne);

  return (
    <Row
      id="technology"
      className="justify-content-center justify-content-lg-end align-items-lg-center align-content-center m-0"
    >
      <Col lg={6} sm={12} className="w-100 land p-0">
        <img
          className="img-fluid w-100 p-0"
          src={content.land}
          alt={content.title}
        />
      </Col>
      <Col
        lg={7}
        sm={12}
        className="text-center text-lg-start row justify-content-center"
      >
        <Nav className="col-sm-12 col-lg-2 ">
          <Nav.Item>
            <Nav.Link
              className={content.title === "LAUNCH VEHICLE" ? "active" : ""}
              onClick={() => setContent(ObjOne)}
            >
              <TbCircle1 />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "SPACEPORT" ? "active" : ""}
              onClick={() => setContent(ObjTwo)}
            >
              <TbCircle2 />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={content.title === "SPACE CAPSULE" ? "active" : ""}
              onClick={() => setContent(ObjThree)}
            >
              <TbCircle3 />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="col-sm-12 col-lg-10 content">
          <h1 className="text4">THE TERMINOLOGY…</h1>
          <h1 className="text3">{content.title}</h1>
          <p className="text2">{content.text}</p>
        </div>
      </Col>
      <Col lg={4} sm={12} className="text-lg-start port">
        <img className="img-fluid" src={content.img} alt={content.title} />
      </Col>
    </Row>
  );
}

export default Technology;
