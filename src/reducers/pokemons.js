import { SET_POKEMONS } from '../action';

const INITIAL_STATE = {
  pokemons: [],
}

const pokemons = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
      }
    default:
      return state;
  }
}

export default pokemons;