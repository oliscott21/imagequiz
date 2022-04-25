import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMenu from "./components/Nav";
import Quiz from "./components/Quiz";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(undefined);
  let customerLoggedInHandler = (customerEmail) => {
    setUser(customerEmail);
  }

  return (
    <div className="App">

      <HashRouter>
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <NavMenu user={user}/>
            </Col>
          </Row>

          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login customerLoggedIn={customerLoggedInHandler} />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/quiz/:id" element={<Quiz user={user}/>}>
            </Route>
          </Routes>

          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>

        </Container>
      </HashRouter>

    </div>


  );

}

export default App;
