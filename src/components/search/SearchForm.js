import AppContext from '../../contexts/app-context';
import EmojiContext from '../../contexts/emoji-context';
import { useContext } from "react";
import ACTIONS from '../../reducers/app-actions';

export default function SearchForm() {
  const { searchTerm, dispatch } = useContext(AppContext);
  const { emojis } = useContext(EmojiContext);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('searching');
    // dispatch({
    //   type: ACTIONS.SET_RESULTS,
    //   payload: {
    //     results: []
    //   }
    // });
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
    if (newTerm.length >= 3) updateResults(newTerm);
    if (newTerm.length < 3) {
      dispatch({
        type: ACTIONS.CLEAR_RESULTS
      })
    }
  }

  return (
    <form className="flex flex-col justify-center items-center ">
      <label htmlFor="search" className="sr-only">Search The Emojis</label>
      <div className="fieldset flex w-full">
        <input className="px-5 py-2 border rounded mr-2 flex-1 dark:bg-gray-600 dark:text-white" type="text" placeholder="Search..." id="search" onChange={handleTerm} value={searchTerm} />
        <button className="btn-form mr-1" onClick={handleSearch}>Search</button>
        <button className="btn-form" onClick={handleClear}>X Clear</button>
      </div>

    </form>
  )
}
