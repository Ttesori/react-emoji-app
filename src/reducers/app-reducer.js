import ACTIONS from './app-actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_EMOJIS:
      return ({ ...state, emojis: action.payload.emojis })
    case ACTIONS.SET_THEME:
      return ({ ...state, theme: 'dark' })
    case ACTIONS.SET_TERM:
      return ({ ...state, searchTerm: action.payload.term })
    case ACTIONS.SET_RESULTS:
      return ({ ...state, searchResults: action.payload.results })
    case ACTIONS.SET_FAVORITES:
      return ({ ...state, favorites: action.payload.favorites })
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