import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Technology from "./Pages/Technology";
import Crew from "./Pages/Crew";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import back1 from "./Assets/Images/home/background-home-desktop.jpg";
function App() {
  const [back, setBack] = useState(back1);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <Container
      fluid
      className="p-0"
      style={{ backgroundImage: `url(${back})` }}
    >
      <NavBar setBack={setBack} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Container>
  );
}

export default App;
