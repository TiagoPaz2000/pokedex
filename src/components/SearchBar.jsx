import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

function SearchBar({ data }) {
  const { setFilteredPokemons, pokemons } = data;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const allTypes = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire',
    'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

  function handleChange({ value }) {
    setSearch(value);
    filterByName(value);
  }

  function handleClick({ value }) {
    setType(value)
    filterByType(value)
  }

  function filterByName(value) {
    let filter = pokemons.filter(({ name, types }) => name.startsWith(value) && types[0].type.name.includes(type));
    setFilteredPokemons(filter);
  }

  function filterByType(value) {
    let filter = pokemons.filter(({ name, types }) => (
      name.startsWith(search) && types.some(({ type }) => type.name.includes(value)))
    );
    setFilteredPokemons(filter);
  }


  return (
    <div>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search by name"
          className="mr-sm-2"
          value={ search }
          onChange={ ({ target }) => handleChange(target)}
        />
      </Form>
      <select name="types" id="types" value={ type } onChange={ ({ target }) => handleClick(target) }>
        <option value=''>All Types</option>
        { allTypes.map((theType) => (
          <option
            key={ theType }
            value={ theType }
          >
            { theType }
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar;
