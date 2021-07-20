// TODOs
// - Do something with favorites
// - Implement reducers?
// - Implement theme
// - Improve styling

import React, { useState, useEffect, useReducer } from 'react';
import Home from '../pages/Home';
import FavoritesPage from '../pages/Favorites';
import AppContext from '../contexts/app-context';
import EmojiContext from '../contexts/emoji-context';
import reducer from '../reducers/app-reducer';
import ACTIONS from '../reducers/app-actions';
import EMOJIS from '../data';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, {
    theme: 'light',
    favorites: [],
    searchTerm: '',
    searchResults: [],
    loading: false
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
    };
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: {
        loading: false
      }
    })
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.documentElement.className = state.theme;
  }, [state.theme])


  const contextValue = {
    ACTIONS, dispatch,
    favorites: state.favorites,
    searchTerm: state.searchTerm,
    searchResults: state.searchResults,
    theme: state.theme,
    loading: state.loading
  }

  return isLoading ? <p>Loading...</p> : (
    <EmojiContext.Provider value={{ emojis: EMOJIS }}>
      <AppContext.Provider value={contextValue}>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/favorites" component={FavoritesPage} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </EmojiContext.Provider >

  )
}
export default App;
