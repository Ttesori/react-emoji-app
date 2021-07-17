import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
const AppContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [emojis, setEmojis] = useState();

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      return setFavorites(favorites.filter(emoji => emoji !== id))
    }
    setFavorites([...favorites, id]);
  }

  const isFavorite = (id) => {
    return favorites.includes(id);
  }

  const contextValue = {
    searchTerm, emojis, setSearchResults, setSearchTerm, searchResults, toggleFavorite, isFavorite
  }

  useEffect(() => {
    console.log(favorites)
  }, [favorites])

  useEffect(() => {
    const fetchAllEmojis = async () => {
      try {
        const url = `https://emoji-api.com/emojis?access_key=${process.env.REACT_APP_EMOJI_API}`;
        const result = await fetch(url);
        let json = await result.json();
        setEmojis(json.filter(emoji => emoji.unicodeName[0] !== 'E'));
        if (json.length) {
          setIsLoading(false);
        }
        console.log(emojis?.length);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllEmojis();
  }, [])

  return isLoading ? <p>Loading...</p> : (
    <AppContext.Provider value={contextValue}>
      <>
        <Home />
      </>
    </AppContext.Provider>
  )
}

export { AppContext };
export default App;
