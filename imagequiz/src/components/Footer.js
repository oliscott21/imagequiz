import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return(
    <Container className="App-footer fixed-bottom">
      <Row>
        <Col>
          <h5>This is the Footer </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
