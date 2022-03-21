import { Container, Row, Col, Image, Card, ListGroup, ListGroupItem, Spinner, Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import local_stor from "../data_access_layer/local.js"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Quiz = () => {

  const [cur, setCur] = useState(0);
  const [quiz, setQuiz] = useState(undefined);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(undefined);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!quiz) {
      let x = local_stor.getQuiz(id);
      setQuiz(x);
    }
  });

  let answered = (pick) => {
    if (pick === quiz.questions[cur].answer && score < 6) {
      setScore(score + 1);
    }
    if (cur > 4) {
      setDone(true);
    } else {
      setCur(cur + 1);
    }
  }

  let reset = () => {
    setDone(undefined);
    setCur(0);
    setScore(0);
  }

  let exit = () => {
    navigate("/");
  }

  return (
    <Container className="quiz">
          {quiz ?
            <Card className="h-100">
              <Card.Img variant="top" src={quiz.questions[cur].picture} className="img"/>
              <Card.Body>
                <Card.Title>{score}/6</Card.Title>
                <Card.Text>
                <ListGroup>
                  {quiz.questions[cur].choices.map(x =>
                    <ListGroupItem onClick={() => answered(x)}>{x}</ListGroupItem>
                  )}
                  { done ?
                    <Container>
                      <Button onClick={reset}>Restart</Button>
                      <Button onClick={exit}>Exit</Button>
                    </Container>
                  :
                    <div></div>
                  }
                </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
            :
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
    </Container>
  );
}

export default Quiz;
