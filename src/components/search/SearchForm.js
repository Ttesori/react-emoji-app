import AppContext from '../../contexts/app-context';
import EmojiContext from '../../contexts/emoji-context';
import { useContext } from "react";
import ACTIONS from '../../reducers/app-actions';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm() {
  const { searchTerm, dispatch } = useContext(AppContext);
  const { emojis } = useContext(EmojiContext);

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
        results: emojis
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
    console.log(newTerm)
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
        <input className="px-3 sm:px-5 py-2 border bg-gray-50 dark:border-indigo-700 rounded mr-2 dark:bg-indigo-900 dark:text-indigo-200 placeholder-gray-400 dark:placeholder-indigo-400 sm:flex-1 outline-none focus:ring ring-indigo-200 dark:ring-indigo-500" type="text" placeholder="Search..." id="search" onChange={handleTerm} value={searchTerm} />
        <button className="btn-form mr-1" onClick={handleSearch}><FaSearch /></button>

      </div>

    </form>
  )
}
