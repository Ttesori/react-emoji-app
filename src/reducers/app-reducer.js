import ACTIONS from './app-actions';
import EMOJIS from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return ({ ...state, theme: action.payload.theme })
    case ACTIONS.SET_TERM:
      return ({ ...state, searchTerm: action.payload.term })
    case ACTIONS.SET_RESULTS:
      let found = EMOJIS.filter(emoji => emoji.slug.includes(action.payload.term) || emoji?.group.includes(action.payload.term));
      return ({ ...state, searchResults: found })
    case ACTIONS.CLEAR_RESULTS:
      return ({ ...state, searchResults: [] })
    case ACTIONS.SET_FAVORITES:
      return ({ ...state, favorites: action.payload.favorites })
    case ACTIONS.SET_LOADING:
      return ({ ...state, loading: action.payload.loading })
    case ACTIONS.TOGGLE_FAVORITE:
      let newFavs = [];
      if (state.favorites.some(emoji => action.payload.emoji.slug === emoji.slug)) {
        newFavs = state.favorites.filter(emoji => emoji.slug !== action.payload.emoji.slug);
      } else {
        newFavs = [...state.favorites, action.payload.emoji];
      }
      localStorage.setItem('emoji-favs', JSON.stringify(newFavs))
      return ({ ...state, favorites: newFavs })
    default:
      return state;
  }
}

export default reducer;