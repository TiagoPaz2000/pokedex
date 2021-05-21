import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CardDetails from '../components/CardDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import '../styles/Details.css';

function Details({ match, pokemons }) {
  const { id } = match.params;
  const [pokemon, setPokemon] = useState(undefined);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  function findPokemon() {
    const teste = pokemons.find((pokemon) => pokemon.id === (+id));
    if (teste === undefined) {
      setShouldRedirect(true)
    }
    setPokemon(teste);
  }

  useEffect(() => {
    findPokemon();
  }, []);

  function renderContent() {
    return (
      <div className="details-container">
        <Header data={ pokemons } />
        <div className="center">
          <CardDetails data={ pokemon } />
        </div>
        <Footer />
      </div>
    )
  }

  if (shouldRedirect) {
    return <Redirect to="/" />
  }

  return pokemon !== undefined
  ? renderContent()
  : <Loading />

}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.pokemons,
});

export default connect(mapStateToProps)(Details);
