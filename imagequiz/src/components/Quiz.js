import { Container, Card, ListGroup, ListGroupItem, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

import apiAccess from '../communication/APIAccess';

const Quiz = (props) => {

  const [cur, setCur] = useState(0);
  const [total, setTotal] = useState(0);
  const [quiz, setQuiz] = useState(undefined);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(undefined);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiAccess.getQuiz(id)
    .then(x => {
        if (x.signedIn) {
            if (x.result) {
                setQuiz(x.result.questions);
            } else {
                alert(x.message);
                navigate('/');
            }
        } else {
          alert("Please log in first!")
          navigate('/login');
        }

    })
    .catch(e => {
        console.log(e);
        alert('Something went wrong.')
    })
  }, []);

  let answered = (pick) => {
    if (!done) {
        if (pick === quiz[cur].answer) {
          setScore(score + 1);
        }
        if (cur >= quiz.length-1) {
          apiAccess.addScore(props.user, id, score)
          .then(x => console.log(x))
          .catch(e => {
              console.log(e);
              alert('Something went wrong.')
          })
          setDone(true);
        } else {
          setCur(cur + 1);
        }
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
              <Card.Img variant="top" src={quiz[cur].picture} className="img"/>
              <Card.Body>
                <Card.Title>{score}/{quiz.length}</Card.Title>
                <Card.Text>
                <ListGroup>
                  {quiz[cur].choices.split(", ").map(x =>
                    <ListGroupItem key={x} onClick={() => answered(x)}>{x}</ListGroupItem>
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
