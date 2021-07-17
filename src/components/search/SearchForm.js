import AppContext from '../../contexts/app-context';
import { useContext } from "react";
import ACTIONS from '../../reducers/app-actions';

export default function SearchForm() {
  const { emojis, searchTerm, dispatch } = useContext(AppContext);

  const handleSearch = (e) => {

    e.preventDefault();
    console.log('searching');
    dispatch({
      type: ACTIONS.SET_RESULTS,
      payload: {
        results: []
      }
    });
    let found = emojis.filter(emoji => emoji.slug.includes(searchTerm) || emoji.group.includes(searchTerm));
    console.log(found.length);
    dispatch({
      type: ACTIONS.SET_RESULTS,
      payload: {
        results: found
      }
    });
  }

  const handleClear = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.SET_RESULTS,
      payload: {
        results: undefined
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
    if (e.target.value.length === 0) return;
    dispatch({
      type: ACTIONS.SET_TERM,
      payload: {
        term: e.target.value.toLowerCase()
      }
    })
  }

  return (
    <form className="flex flex-col justify-center items-center ">
      <label htmlFor="search" className="sr-only">Search The Emojis</label>
      <div className="fieldset flex w-full">
        <input className="px-5 py-2 border rounded mr-2 flex-1 dark:bg-gray-600 dark:text-white" type="text" placeholder="Search..." id="search" onChange={handleTerm} />
        <button className="btn-form mr-1" onClick={handleSearch}>Search</button>
        <button className="btn-form" onClick={handleClear}>X Clear</button>
      </div>

    </form>
  )
}
