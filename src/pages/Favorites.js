import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

function Favorites({ pokemons }) {
  const [data, setData] = useState(undefined);
  function findFavorites() {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoritePokemons'));
    console.log(pokemons);
    console.log(favoritesStorage);
    let favorites = [];
    pokemons.forEach((p) => {
      favoritesStorage.forEach((e) => {
        if (e === p.id) {
          favorites.push(p)
        }
      })
    });
    setData(favorites);
  }

  useEffect(() => {
    findFavorites();
  }, [])

  if (data === undefined || data.length === 0) {
    return (
      <div>
        <Header data={ pokemons } />
        You don't have any favorite pokemon
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Header data={ pokemons } />
      <Cards data={ data }/>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.pokemons,
});

export default connect(mapStateToProps)(Favorites);