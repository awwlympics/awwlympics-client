import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button, Card, CardBody } from "reactstrap";

const FixedFullsizeBg = styled.section`
  min-height: calc(100vh - 99px);
  background: url(https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const DarkCard = styled(Card)`
  && {
    background-color: rgba(52, 58, 64, 0.75);
    color: white;
  }
`;

const MaterialInput = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d2d2d2;
    outline: 0;
    font-size: 16px;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
  label {
    pointer-events: none;
  }
  input::placeholder {
    color: transparent;
    pointer-events: none;
  }
  input:placeholder-shown ~ label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }
  label,
  input:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #9b9b9b;
  }
  input:focus ~ label {
    color: #1976d2;
  }
  input:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #1976d2;
  }
`;

const SignUp = props => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    username: "",
    password: ""
  });
  const handleChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  return (
    <FixedFullsizeBg className="sign-up">
      <Container>
        <Row>
          <Col
            xs={{ size: 12 }}
            sm={{ size: 10, offset: 1 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <DarkCard className="my-3">
              <CardBody>
                <Form>
                  <h3 className="text-center mt-3 mb-4">
                    Welcome to the Community!
                  </h3>
                  <MaterialInput>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      autoComplete="off"
                      value={userInput.firstName}
                      onChange={handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </MaterialInput>
                  <MaterialInput>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userInput.lastName}
                      onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </MaterialInput>
                  <MaterialInput>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={userInput.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                  </MaterialInput>
                  <MaterialInput>
                    <input
                      type="tel"
                      name="mobile"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="Mobile"
                      value={userInput.mobile}
                      onChange={handleChange}
                    />
                    <label htmlFor="mobile">Mobile</label>
                  </MaterialInput>
                  <MaterialInput>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={userInput.username}
                      onChange={handleChange}
                    />
                    <label htmlFor="username">Username</label>
                  </MaterialInput>
                  <MaterialInput>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={userInput.password}
                      onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                  </MaterialInput>
                  <Button className="d-block mx-auto mt-3" color="primary">
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </DarkCard>
          </Col>
        </Row>
      </Container>
    </FixedFullsizeBg>
  );
};

export default SignUp;
