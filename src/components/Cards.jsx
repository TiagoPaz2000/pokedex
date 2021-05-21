import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Cards.css';
import '../fonts/Anton/Anton-Regular.ttf';

function Cards({ data }) {
  return (
    <div className="cards">
      { data.map(({ name, sprites, types, id }) => (
          <Card style={{ width: '18rem' }} className="testeCard">
            <Card.Img variant="top" src={ sprites.front_default }/>
            <Card.Body className="cardClass">
              <Card.Title>{ name }</Card.Title>
              <Card.Text>
                { types.map(({ type }) => <span className={ type.name } id="type">{ type.name }</span>)}
              </Card.Text>
              <Link to={ `/details/${ id }` }>
                <Button variant="primary">See More</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  );
}

export default Cards;
