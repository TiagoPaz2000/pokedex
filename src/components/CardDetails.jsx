import React from 'react';
import FavoritesButton from './FavoritesButton';
import { Carousel, Card, Button, Badge } from 'react-bootstrap';

function CardDetails({ data }) {
  const { sprites, name, stats, abilities, types, id } = data;
  console.log(id);
  const images = Object.values(sprites).filter((e) => e !== null && typeof e === 'string');
  return (
    <Card style={{ width: '18rem' }}>
      <Carousel>
          { images.map((img) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ img }
                alt="images"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      <Card.Body className="cardClass">
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
          { types.map(({ type }) => <span className={ type.name } id="type">{ type.name }</span>)}
        </Card.Text>
        <FavoritesButton id={ id }/>
      </Card.Body>
    </Card>
  )
}

export default CardDetails;
