import React, { useState, useEffect, useRef } from 'react';
import { Button, Overlay, Tooltip} from 'react-bootstrap';

function FavoritesButton({ id }) {
  const [variant, setVariant] = useState(() => colorButton());
  const [show, setShow] = useState(false);
  const target = useRef(null);

  function saveLocalStorage() {
    setShow(!show)
    variant === 'outline-warning' ? setVariant('secondary') : setVariant('outline-warning');
    const favoritesStorage = JSON.parse(localStorage.getItem('favoritePokemons'));
    if (favoritesStorage === null) {
      localStorage.setItem('favoritePokemons', JSON.stringify([id]))
    } else {
      let favorites = [...JSON.parse(localStorage.getItem('favoritePokemons'))];
      const hasOrNot = favorites.some((e) => (+e) === id);
      if (!hasOrNot) {
        favorites.push(id);
        localStorage.setItem('favoritePokemons', JSON.stringify(favorites))
      } else {
        const desfavorite = favorites.filter((e) => (+e) !== id)
        localStorage.setItem('favoritePokemons', JSON.stringify(desfavorite))
      }
    }
  }

  function colorButton() {
    const favorites = [...JSON.parse(localStorage.getItem('favoritePokemons'))];
    const hasOrNot = favorites.some((value) => id === value);
    return hasOrNot ? 'outline-warning' : 'secondary';
  }

  return (
    <div>
      <Button
        variant={ variant }
        onClick={ saveLocalStorage }
        ref={ target }
        active
        >
          Favorite
      </Button>
      <Overlay target={ target.current } show={ show } placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Saved on Favorite!
          </Tooltip>
        )}
      </Overlay>

    </div>
  )
}

export default FavoritesButton;
