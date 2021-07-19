import AppContext from '../../contexts/app-context';
import { useContext, useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa';
import Emoji from '../emojis/Emoji';
import InfiniteScroll from 'react-infinite-scroll-component';
import ACTIONS from '../../reducers/app-actions';

export default function SearchResults() {
  const { searchResults, loading, dispatch, searchTerm } = useContext(AppContext);
  const [mappedResults, setMappedResults] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);

  // const [shownResults, setShownResults] = useState([]);
  // const [more, setMore] = useState(true);
  // const [startingAt, setStartingAt] = useState(0);
  // const LIMIT = 20;

  // const getMoreResults = () => {
  //   let results = state.searchResults.filter((result, i) => i > startingAt && i < startingAt + LIMIT);
  //   setMore(results.length === 0 ? false : true);
  //   setShownResults([...shownResults, ...results]);
  //   setStartingAt(startingAt + LIMIT)
  // }

  // useEffect(() => {
  //   setStartingAt(0);
  //   setShownResults([]);
  //   if (!state.searchResults?.length) return;
  //   let results = state.searchResults.filter((result, i) => i > -1 && i < LIMIT);
  //   setShownResults([...shownResults, ...results]);
  //   setStartingAt(LIMIT);
  //   setMore(LIMIT > state.searchResults.length ? false : true)
  // }, [state.searchResults, state.searchTerm]);



  useEffect(() => {
    setLocalLoading(loading);
    console.log(loading);
  }, [loading]);



  useEffect(() => {
    const mapResults = () => {
      if (searchResults.length === 0) {
        dispatch({
          type: ACTIONS.SET_LOADING,
          payload: {
            loading: false
          }
        })
        return setMappedResults([]);
      }
      let results = searchResults.map(result => <Emoji key={result.slug + Math.ceil(Math.random() * 9999)} emoji={result} />);
      setMappedResults(results);
      dispatch({
        type: ACTIONS.SET_LOADING,
        payload: {
          loading: false
        }
      })
    }
    mapResults();
  }, [searchResults, dispatch])

  if (localLoading) return <p>Loading...</p>;

  if (mappedResults?.length === 0 && searchTerm.length >= 3) {
    return <div>No results found.</div>
  }

  if (mappedResults?.length === 0) {
    return (
      <div className="mt-5 px-5 py-10 border-2 border-dashed border-indigo-200 dark:border-indigo-700 w-full text-center rounded italic text-indigo-500">
        <p><FaArrowUp className="inline-block mr-2 w-10 h-10 text-indigo-300 dark:text-indigo-700 mb-2" /><br />
          Enter your search terms above.</p>
      </div>
    )
  }

  return !localLoading && (
    <div className="search-results grid grid-cols-4 gap-4 mt-4">
      {mappedResults}
    </div>
  )
}
