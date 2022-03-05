import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import flowers from "./data.js";
import local_stor from "../data_access_layer/local"

const Home = () => {
  console.log(flowers);

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

/*
const placeFlowers = () => {
  let displayFlowers = () => {
         let div = document.querySelector('#flowersDiv');
         for (let i = 0; i < 2; i++) {
           let row = document.createElement('div');
           row.setAttribute('class', 'row');
           div.appendChild(row);
           for (let j = 0; j < 4; j++) {
             let col = document.createElement('div');
             let flower = document.createElement('img');
             let title = document.createElement('h5');
             let index = i * 4 + j;

             col.setAttribute('class', 'col');
             col.style.paddingTop = '25px';
             col.style.paddingLeft = '25px';
             col.style.paddingRight = '25px';
             col.style.width = '25%';
             col.style.textAlign = 'center';
             flower.style.width = '100%';
             let width = screen.width/4;
             flower.style.height = (width/1.5) + 'px';


             flower.src = flowers[index].picture;
             title.innerHTML = flowers[index].name;
             col.appendChild(flower);
             col.appendChild(title);
             row.appendChild(col);
           }
         }
       }
}
*/

export default Home;
