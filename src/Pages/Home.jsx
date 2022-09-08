import React from "react";
import "../Styles/Home.scss";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <Row
      id="home"
      className="justify-content-center align-items-lg-center align-content-center"
    >
      <Col lg={4} sm={12} className="text-center text-lg-start space">
        <h1 className="text3">SPACE</h1>
        <p className="text2">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </Col>
      <Col
        lg={4}
        sm={12}
        className="d-flex justify-content-center justify-content-lg-end"
      >
        <div className="circel">
          <h4>EXPLORE</h4>
        </div>
      </Col>
    </Row>
  );
}

export default Home;
