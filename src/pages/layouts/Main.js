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
    <div className="dark:bg-gray-900 dark:text-white">
      <header className="bg-indigo-300 p-5  dark:bg-indigo-800 dark:text-white mb-7">
        <div className="container flex justify-between items-center max-w-screen-lg mx-auto">
          <h1 className="text-xl font-bold text-gray-800 dark:text-indigo-50"><span className="text-2xl mr-1">🕵️‍♀️ </span> EmojiHunt</h1>
          <nav>
            <NavLink exact to="/" className="mr-3" activeClassName="font-bold">Search</NavLink>
            <NavLink exact to="/favorites" className="mr-3" activeClassName="font-bold">Favorites</NavLink>
            <BtnIcon handleOnClick={handleSwitchTheme}>{theme === 'light' ? <FaSun /> : <FaMoon />}</BtnIcon>
          </nav>
        </div>

      </header>
      <main className="max-w-screen-md mx-auto my-5 px-5 flex flex-col justify-center items-center">
        {children}
      </main>
      <ToastContainer />
    </div>
  )
}
