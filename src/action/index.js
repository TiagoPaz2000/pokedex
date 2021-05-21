export const SET_POKEMONS = 'SET_POKEMONS';

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  pokemons,
});

export const fetchPokemons = (pokemons) => (
  async (dispatch) => {
    try {
      return dispatch(setPokemons(pokemons));
    } catch (error) {
      return console.log(error);
    }
  }
);

export const SET_FAVORITES = 'SET_FAVORITES';

export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  favorites,
});

export const fetchFavorites = (favorites) => (
  async (dispatch) => {
    try {
      return dispatch(setFavorites(favorites));
    } catch (error) {
      return console.log(error);
    }
  }
);