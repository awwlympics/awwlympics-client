import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="bg-primary  py-2">
      <Container fluid className="">
        <Row className="">
          <Col xs="12" md="6" className="text-center text-md-left">
            <a href="https://twitter.com/?lang=en" className="text-light mr-3">
              <i className="fab fa-twitter fa-lg" />
            </a>
            <a href="https://www.instagram.com/" className="text-light mr-3">
              <i className="fab fa-facebook-f fa-lg" />
            </a>
            <a href="https://www.facebook.com/" className="text-light">
              <i className="fab fa-instagram fa-lg" />
            </a>
          </Col>
          <Col xs="12" className="text-center text-md-right" md="6">
            <Link to="/terms-of-service" className="text-light mr-3">
              Terms of Service
            </Link>
            <Link to="privacy-policy" className="text-light">
              Privacy Policy
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
