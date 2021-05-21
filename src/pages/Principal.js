import React, { useEffect, useState} from 'react';
import getAPI from '../services';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { fetchPokemons } from '../action';
import { connect } from 'react-redux';

function Principal({ dispatchFetchPokemons }) {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAPI() {
    const array = [];
    let index = 1;
    while(index < 152) {
      const teste = await getAPI(index);
      array.push(teste);
      index += 1;
    }
    setPokemons(array);
    await dispatchFetchPokemons(array);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) setIsLoading(false);
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  if (!isLoading && filteredPokemons.length > 0) {
    return (
      <div>
        <Header variant={ true } data={ {filteredPokemons, setFilteredPokemons, pokemons} } />
        <Cards data={ filteredPokemons } />
        <Footer />
      </div>
    );
  } else if (isLoading === true) {
    return <Loading />;
  } else {
    return (
      <div>
        <Header variant={ true } data={ {filteredPokemons, setFilteredPokemons, pokemons} } />
        <div>
          Not found any pokemons with this filters
        </div>
        <Footer />
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPokemons: (pokemons) => dispatch(fetchPokemons(pokemons)),
});

export default connect(null, mapDispatchToProps)(Principal);
