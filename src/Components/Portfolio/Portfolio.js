import React from "react";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import NightOut from "../../images/nightout.jpg";
import CryptoTalk from "../../images/cryptoimg.jpg";
import Fitness from "../../images/fitness.jpg";

export default function Portfolio() {
  return (
    <>
      <div className="cardline">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={NightOut} />
          <Card.Body>
            <Card.Title>Night Outside</Card.Title>
            <Card.Text>Description</Card.Text>
            <a href="https://kevinlacarrubba.github.io/plan-rain-check/">
              <Button variant="primary">Visit Page</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={CryptoTalk} />
          <Card.Body>
            <Card.Title>Crypto Talk</Card.Title>
            <Card.Text>Description</Card.Text>
            <a href="https://cryptotalk-forum.herokuapp.com/">
              <Button variant="primary">Visit Page</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Fitness} />
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>Description</Card.Text>
            <a href="https://fitness-tracker-hw-bootcamp.herokuapp.com/?id=6154b6761a1c8d00162673e8">
              <Button variant="primary">Visit Page</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
