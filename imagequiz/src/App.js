import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavItem, Nav, NavLink } from "react-bootstrap";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" className="fixed-top">
            <Navbar.Brand href="#">React</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#/register">
              Register
            </Nav.Link>
            <Nav.Link href="#/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar>
      </header>

      <div className="bb">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
      </HashRouter>
      </div>

      <footer className="App-footer fixed-bottom">
        <p>h </p>
      </footer>

    </div>


  );

}

export default App;
