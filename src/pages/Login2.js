import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function LoginPage() {
  const [UserForm, setUserForm] = useState({
    username: "",
    password: "",
    //role: "",
  });

  const handleChange = (e) => {
    setUserForm({ UserForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8082/capstoneApi/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserForm),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login successfully");
        } else {
          console.log("Password or Username Incorrect");
        }
      })
      .catch((error) => {
        console.log("Password or Username Incorrect: ", error);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="form">
        <Row>
          <center>
            <h1>Login</h1>
          </center>
        </Row>
        <Row className="mx-3">
          <div className="col">
            <Form.Group controlId="formUsername">
              <Form.Label>Enter Username:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
        </Row>
        <Row className="mx-3">
          <div className="col">
            <Form.Group controlId="formPassword">
              <Form.Label>Enter Password:</Form.Label>
              <Form.Control
                type="text"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
        </Row>

        <Row>
          <center>
            <Button onClick={handleSubmit}>Submit</Button>
          </center>
        </Row>
      </div>
    </Form>
  );
}
export default LoginPage;
