import { ADD_MEETUP, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/types'

const initialState = {
    meetups: [],
    favorites: []
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MEETUP:
        return {
          ...state,
          meetups: [...state.meetups, action.payload]
        };
      case ADD_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default reducer;