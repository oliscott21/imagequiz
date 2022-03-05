import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return(
    <Container className="App-header">
      <Row>
        <Col>
          <h5>This is the Header </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
