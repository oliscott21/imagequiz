import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import FederatedLogin from './components/FederatedLogin';
import Register from "./components/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMenu from "./components/Nav";
import Quiz from "./components/Quiz";
import { useState } from "react";
import { useParams } from "react-router-dom";


function App() {
  const [customer, setCustomer] = useState(localStorage.getItem('customer'));

  let customerLoggedInHandler = (customerEmail) => {
    localStorage.setItem('customer', customerEmail);
    setCustomer(customerEmail);
  }

  let customerLoggedOutHandler = () => {
    localStorage.removeItem('customer');
    setCustomer(undefined);
  }

  return (
    <HashRouter>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavMenu customer={customer} customerLoggedOut={customerLoggedOutHandler} />
          </Col>
        </Row>

        <Routes>
          <Route exact path='/register' element={<Register />}>

          </Route>
          <Route path='/login/:from' element={<Login customerLoggedIn={customerLoggedInHandler} />}>

          </Route>
          <Route path='/login' element={<Login customerLoggedIn={customerLoggedInHandler} />}>

          </Route>
          <Route path='/google/:username/:name' element={<FederatedLogin provider="google" customerLoggedIn={customerLoggedInHandler} />}>

          </Route>

          <Route exact path='/quiz/:id' element={
            <ProtectedRoute customer={customer}><Quiz /></ProtectedRoute>
          } >

          </Route>
          <Route exact path='/' element={<Home />} >

          </Route>
        </Routes>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

const ProtectedRoute = ({ customer, children }) => {
  const { id } = useParams();

  if (customer) {
    return children;
  } else {
    return <Navigate to={`/login/${id}`} />;
  }
}

export default App;
