import AppContext from '../../contexts/app-context';
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";
import BtnIcon from '../../components/common/BtnIcon';
import ACTIONS from '../../reducers/app-actions'
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Main({ children }) {
  const { theme, dispatch } = useContext(AppContext);
  const handleSwitchTheme = () => {
    console.log('switching theme');
    dispatch({
      type: ACTIONS.SET_THEME,
      payload: {
        theme: theme === 'light' ? 'dark' : 'light'
      }
    })
  }
  return (
    <>
      <header className="bg-blue-300 p-5  dark:bg-blue-800 dark:text-white mb-5 sm:mb-7">
        <div className="container flex flex-col sm:flex-row justify-between items-center max-w-screen-lg mx-auto">
          <h1 className="text-2xl sm:text-xl font-bold text-blue-900 dark:text-blue-50 mb-2 sm:mb-0"><span className="text-3xl mr-1">🕵️‍♀️ </span> EmojiHunt</h1>
          <nav>
            <NavLink exact to="/" className="mr-3" activeClassName="font-bold">Search</NavLink>
            <NavLink exact to="/favorites" className="mr-3" activeClassName="font-bold">Favorites
            </NavLink>
            <BtnIcon handleOnClick={handleSwitchTheme}>{theme === 'light' ? <FaSun /> : <FaMoon />}</BtnIcon>
          </nav>
        </div>

      </header>
      <main className="w-full max-w-screen-md mx-auto px-5 flex flex-col justify-self-start justify-start items-center ">
        {children}
      </main>
      <ToastContainer />
      <footer className="bg-blue-300 p-5  dark:bg-blue-800 dark:text-blue-400 mt-3">
        <p className="font-bold text-center text-sm uppercase tracking-wide"><a href="https://tonitesori.dev" className="text-blue-800 dark:text-blue-300  dark:hover:text-blue-200">React Development by Toni</a>  🐧 </p>
      </footer>
    </>
  )
}
