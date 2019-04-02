import React, { useState } from "react";
import { Container, Row, Col, Form, Button, CardBody } from "reactstrap";
import {
  FixedFullsizeBg,
  DarkCard,
  MaterialInput
} from "../styledComponents/SignUp";

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
