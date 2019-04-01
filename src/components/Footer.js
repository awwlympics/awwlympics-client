import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";

const StyledFooter = styled.footer`
  background: ;
`;

const Footer = props => {
  return (
    <footer className="bg-primary  py-2">
      <Container fluid className="">
        <Row className="">
          <Col xs="12" md="6" className="text-center text-md-left">
            <a href="#" className="text-light mr-3">
              <i className="fab fa-twitter fa-lg" />
            </a>
            <a href="#" className="text-light mr-3">
              <i className="fab fa-facebook-f fa-lg" />
            </a>
            <a href="#" className="text-light">
              <i className="fab fa-instagram fa-lg" />
            </a>
          </Col>
          <Col xs="12" className="text-center text-md-right" md="6">
            <a href="#" className="text-light mr-3">
              Terms of Service
            </a>
            <a href="#" className="text-light">
              Privacy Policy
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
