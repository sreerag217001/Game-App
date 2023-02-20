import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

function Gamecard({game}) {
    console.log(game);
  return (
    <Col sm={12} md={6} lg={4} xl={3}>   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={game.image} />
    <Card.Body>
      <Card.Title>{game.title}</Card.Title>
      <Card.Text>
      {game.short_description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{game.genre}</ListGroup.Item>
      <ListGroup.Item>{game.platform}</ListGroup.Item>
      <ListGroup.Item>{game.publisher}</ListGroup.Item>
      <ListGroup.Item>{game.developer}</ListGroup.Item>
      <ListGroup.Item>{game.release_date}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card></Col>
  )
}

export default Gamecard