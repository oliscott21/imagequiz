import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import local_stor from "../data_access_layer/local"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [err, setErrors] = useState("");
  const nav = useNavigate();

  const errors = () => {

  const err = {}

    if (!fname || fname === "" ) err.fname = "Please Enter First Name";
    if (!lname || lname === "" ) err.lname = "Please Enter Last Name";
    if (!email || email === "" ) err.email = "Please Enter Email";
    if (!password || password === "" ) err.pass = "Please Enter Password";

    return err;
  }

  let onFNameChange = (e) => {
    setFName(e.target.value);


    if (!!err["fname"]) setErrors({["fname"]:null});
  }

  let onLNameChange = (e) => {
    setLName(e.target.value);
    if (!!err["lname"]) setErrors({["lname"]:null});
  }

  let onEmailChange = (e) => {
    setEmail(e.target.value);
    if (!!err["email"]) setErrors({["email"]:null});
  }

  let onPasswordChange = (e) => {
    setPass(e.target.value);
    if (!!err["pass"]) setErrors({["pass"]:null});
  }

  let onSubmitHandler = (e) => {
    e.preventDefault();

    const err = errors();

    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      local_stor.customers.push({fname: fname, lname: lname, email: email, password: password});
      nav("/login");
    }
  }

    return (
      <Form onSubmit={onSubmitHandler} className="form">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={fname} onChange={onFNameChange}
                isInvalid={ !!err.fname}/>
              <Form.Control.Feedback type="invalid" className="error">
                {err.fname}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Enter Last name" value={lname} onChange={onLNameChange}
              isInvalid={ !!err.lname}/>
            <Form.Control.Feedback type="invalid" className="error">
              {err.lname}
            </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChange}
          isInvalid={ !!err.email}/>
        <Form.Control.Feedback type="invalid" className="error">
          {err.email}
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange}
          isInvalid={ !!err.pass}/>
        <Form.Control.Feedback type="invalid" className="error">
          {err.pass}
        </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" className="btn">
          Submit
        </Button>
      </Form>
  );
}

export default Register;
