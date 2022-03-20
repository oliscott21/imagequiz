import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import flowers from "./data.js";

const Home = () => {
  const flower = []
  let inner = []
  for (var i = 0; i < flowers.length; i++) {
    if (i % 4 === 0) {
        flower.push(inner);
        inner = []
    }
    inner.push(flowers[i]);
  }
  inner.push("")
  flower.push(inner);

  return (

    <Container className="images">
        {flower.map ((inn, i) => {
          return (
            <Row>
              { inn.map ((image, j) => {
                return (
                  <Col className="imgCon" >
                    <Image className="img" src={image.picture}/>
                    <p>{image.name}</p>
                  </Col>
                );
              })}
            </Row>
          );
        })}

    </Container>
  );
}


export default Home;
