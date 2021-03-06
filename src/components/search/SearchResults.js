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
  const [startingAt, setStartingAt] = useState(0);
  const [more, setMore] = useState(true);
  const LIMIT = 20;

  const getMoreResults = () => {
    let results = searchResults.slice(startingAt, startingAt + LIMIT);
    setMore(searchResults.length - (startingAt + LIMIT) > 0 ? true : false);
    const mapped = [...mappedResults, ...mapResultsToEmoji(results)];
    setMappedResults(mapped);
    setStartingAt(startingAt + LIMIT);
  }

  const mapResultsToEmoji = (arr) => {
    return arr.map(result => <Emoji key={result.slug + Math.ceil(Math.random() * 9999)} emoji={result} />);
  }

  useEffect(() => {
    setLocalLoading(loading);
  }, [loading]);



  useEffect(() => {
    setMore(true);
    setStartingAt(0);
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
      let results;
      if (searchResults.length > LIMIT) {
        results = mapResultsToEmoji(searchResults.slice(0, LIMIT));
        setStartingAt(LIMIT);
        setMore(true);
      } else {
        setStartingAt(0);
        results = mapResultsToEmoji(searchResults);
        setMore(false);
      }
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

  //if (localLoading) return <p>Loading...</p>;

  if (mappedResults?.length === 0 && searchTerm.length >= 1) {
    return <div className="italic text-center mt-3">No results found.</div>
  }

  if (mappedResults?.length === 0) {
    return (
      <div className="mt-5 px-5 py-10 border-2 border-dashed border-blue-200 dark:border-gray-700 w-full text-center rounded italic text-gray-500 dark:text-gray-400">
        <p><FaArrowUp className="inline-block mr-2 w-10 h-10 text-blue-300 dark:text-gray-600 mb-2 animate-bounce" /><br />
          Enter your search terms above.</p>
      </div>
    )
  }

  return !localLoading && (
    <div className="">
      <InfiniteScroll
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4"
        scrollThreshold={1}
        dataLength={mappedResults.length} //This is important field to render the next data
        next={getMoreResults}
        hasMore={more}
        loader={<p className="text-center col-span-2 sm:col-span-4 pt-2 pb-5 text-lg italic">
          Loading...
        </p>}
        endMessage={
          <p className="text-center col-span-2 sm:col-span-4 pt-2 pb-5 text-lg font-bold">
            {mappedResults.length > LIMIT && '???? Yay! You have seen it all'}
          </p>
        }>
        {mappedResults}
      </InfiniteScroll>
    </div>

  )
}
