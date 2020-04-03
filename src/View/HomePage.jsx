import React from "react";
//import { Link } from "react-router-dom";
import AppMap from "../components/AppMap";
import NavBar from "../components/NavBar";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      
      <AppMap />

      <footer>
        <NavBar />
      </footer>
    </Container>
  );
}

export default HomePage;
