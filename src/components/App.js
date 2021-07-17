// TODOs
// - Do something with favorites
// - Implement reducers?
// - Implement theme
// - Improve styling

import React, { useState, useEffect, useReducer } from 'react';
import Home from '../pages/Home';
import FavoritesPage from '../pages/Favorites';
import AppContext from '../contexts/app-context';
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
  }, []);

  useEffect(() => {
    document.body.className = state.theme
  }, [state.theme])


  const contextValue = {
    ACTIONS, dispatch,
    emojis: EMOJIS,
    favorites: state.favorites,
    searchTerm: state.searchTerm,
    searchResults: state.searchResults,
    theme: state.theme
  }

  return isLoading ? <p>Loading...</p> : (
    <AppContext.Provider value={contextValue}>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  )
}
export default App;
