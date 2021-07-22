import AppContext from '../../contexts/app-context';
import { useContext } from "react";
import ACTIONS from '../../reducers/app-actions';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function SearchForm() {
  const { searchTerm, dispatch } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    updateResults(searchTerm);
  }

  const updateResults = (newTerm) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: {
        loading: true
      }
    });
    dispatch({
      type: ACTIONS.SET_RESULTS,
      payload: {
        term: newTerm
      }
    });
  }

  const handleClear = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.SET_RESULTS,
      payload: {
        results: []
      }
    });
    dispatch({
      type: ACTIONS.SET_TERM,
      payload: {
        term: ''
      }
    });
  }

  const handleTerm = (e) => {
    let newTerm = e.target.value.toLowerCase();
    dispatch({
      type: ACTIONS.SET_TERM,
      payload: {
        term: newTerm
      }
    });
    if (newTerm.length >= 1) updateResults(newTerm);
    if (newTerm.length === 0) {
      dispatch({
        type: ACTIONS.CLEAR_RESULTS
      })
    }
  }

  return (
    <form className="flex flex-col justify-center items-center w-full">
      <label htmlFor="search" className="sr-only">Search The Emojis</label>
      <div className="fieldset flex w-full">
        <input className="px-3 sm:px-5 py-1.5 sm:py-2 border bg-gray-50 dark:border-blue-700 rounded mr-2 dark:bg-blue-900 dark:text-blue-200 placeholder-gray-400 dark:placeholder-blue-400 outline-none focus:ring ring-blue-200 dark:ring-blue-500 w-5/6 sm:w-11/12" type="text" placeholder="Enter search term..." id="search" onChange={handleTerm} value={searchTerm} autoComplete="off" />
        <button className="bg-blue-300 px-2 sm:px-5 py-2 rounded dark:bg-blue-500 dark:text-blue-900 hover:bg-blue-700 hover:text-white font-bold  border border-blue-400 dark:border-blue-700 dark:hover:bg-blue-400 sm:text-lg ml-1 w-1/6 sm:w-1/12 text-center transition-all" onClick={handleSearch}><FaSearch className="inline" /></button>

      </div>
      <button className="mt-3 w-full inline-block text-red-700 dark:text-blue-400 text-sm hover:text-red-500 dark:hover:text-blue-100 transition-all" onClick={handleClear}><FaTimes className="inline" /> Clear Search</button>
    </form>
  )
}
