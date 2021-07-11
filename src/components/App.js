import React, { useState } from 'react';
import Home from '../pages/Home';
const AppContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <AppContext.Provider value={theme}>
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>

  );
}

export { AppContext }
export default App;
