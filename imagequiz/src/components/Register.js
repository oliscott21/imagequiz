import { Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import local_stor from "../data_access_layer/local"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [err, setErrors] = useState("");
  const nav = useNavigate();

  let onNameChange = (e) => {
    setName(e.target.value);
  }

  let onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  let onPasswordChange = (e) => {
    setPass(e.target.value);
  }

  let onSubmitHandler = (e) => {
    local_stor.addCustomer(name, email, password)
    nav("/login");
  }

    return (
      <Form onSubmit={onSubmitHandler} className="form">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={name} onChange={onNameChange}/>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChange}/>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="btn">
          Submit
        </Button>
      </Form>
  );
}

export default Register;
