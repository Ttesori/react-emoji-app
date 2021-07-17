// TODOs
// - Do something with favorites
// - Implement reducers?
// - Implement theme
// - Improve styling

import React, { useState, useEffect, useReducer } from 'react';
import Home from '../pages/Home';
import AppContext from '../contexts/app-context';
import reducer from '../reducers/app-reducer';
import ACTIONS from '../reducers/app-actions';
import EMOJIS from '../data';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, {
    theme: 'light',
    favorites: [],
    searchTerm: '',
    searchResults: undefined,
  });

  useEffect(() => {
    let faves = localStorage.getItem('emoji-favs');
    if (faves) {
      dispatch({
        type: ACTIONS.SET_FAVORITES,
        payload: {
          favorites: JSON.parse(faves)
        }
      })
    }
    setIsLoading(false);
  }, [])


  const contextValue = {
    ACTIONS, dispatch,
    emojis: EMOJIS,
    favorites: state.favorites,
    searchTerm: state.searchTerm,
    searchResults: state.searchResults,
  }

  return isLoading ? <p>Loading...</p> : (
    <AppContext.Provider value={contextValue}>
      <Home />
    </AppContext.Provider>
  )
}
export default App;
