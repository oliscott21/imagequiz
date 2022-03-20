import { Container, Row, Col, Image, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import local_stor from "../data_access_layer/local.js"

const Home = () => {


  return (
    <Container className="images">
      <Row xs={1} md={4} className="g-4">
        {local_stor.getFlowers().map((x, idx) => (
          <Col>
            <Card className="imgCon">
              <Card.Img variant="top" src={x.picture} className="img"/>
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

  );
}


export default Home;
