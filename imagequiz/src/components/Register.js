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

  const errors = () => {

  const err = {}

    if (!name || name === "" ) err.fname = "Please Enter Name";
    if (!email || email === "" ) err.email = "Please Enter Email";
    if (!password || password === "" ) err.pass = "Please Enter Password";

    return err;
  }

  let onNameChange = (e) => {
    setName(e.target.value);
    if (!!err["name"]) setErrors({["name"]:null});
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
    local_stor.addCustomer()
    nav("/login");
    /*
    e.preventDefault();

    const err = errors();

    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      local_stor.customers.push({fname: fname, lname: lname, email: email, password: password});

    }
    */
  }

    return (
      <Form onSubmit={onSubmitHandler} className="form">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={name} onChange={onNameChange}
                isInvalid={ !!err.name}/>
              <Form.Control.Feedback type="invalid" className="error">
                {err.name}
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
