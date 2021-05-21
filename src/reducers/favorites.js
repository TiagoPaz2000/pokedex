import { SET_FAVORITES } from '../action';

const INITIAL_STATE = {
  favorites: [],
}

const favorites = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      }
    default:
      return state;
  }
}

export default favorites;
