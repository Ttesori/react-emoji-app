import AppContext from '../../contexts/app-context';
import { useContext, useState, useEffect } from "react";
import Emoji from '../emojis/Emoji';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function SearchResults() {
  const { searchResults } = useContext(AppContext);
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

  if (searchResults === undefined) {
    return <div>Enter a term above to search</div>
  }
  if (searchResults?.length === 0) {
    return <div>No results found.</div>
  }
  return (
    <div className="search-results grid grid-cols-4 gap-4 mt-4">
      {searchResults.map(result => <Emoji key={result.slug + Math.ceil(Math.random() * 9999)} emoji={result} />)}
    </div>
  )
}
