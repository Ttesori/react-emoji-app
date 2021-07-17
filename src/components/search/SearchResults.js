import { AppContext } from '../App';
import { useContext, useState, useEffect } from "react";
import Emoji from '../emojis/Emoji';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function SearchResults() {
  const { searchResults } = useContext(AppContext);
  const [shownResults, setShownResults] = useState([]);
  const [more, setMore] = useState(true);
  const [startingAt, setStartingAt] = useState(0);
  const LIMIT = 20;

  const getMoreResults = () => {
    let results = searchResults.filter((result, i) => i > startingAt && i < startingAt + LIMIT);
    console.log('length', results.length);
    setMore(results.length === 0 ? false : true);
    console.log('more', more);
    setShownResults([...shownResults, ...results]);
    setStartingAt(startingAt + LIMIT)
  }

  useEffect(() => {
    if (!searchResults) return;
    console.log('more', more);
    console.log(searchResults.length);
    setStartingAt(0);
    let results = searchResults.filter((result, i) => i > -1 && i < LIMIT);
    setShownResults([...shownResults, ...results]);
    setStartingAt(LIMIT);
    setMore(LIMIT > searchResults.length ? false : true)
  }, [searchResults]);

  if (searchResults === undefined) {
    return <div>Enter a term above to search</div>
  }
  if (searchResults === -1) {
    return <div>No results found.</div>
  }
  if (searchResults === 'loading') {
    return <div>Loading...</div>
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={shownResults?.length || 0} //This is important field to render the next data
        className="search-results grid grid-cols-4 gap-4 mt-4"
        next={getMoreResults}
        hasMore={more}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className="">
            <em>No more results.</em>
          </p>
        }
      >
        {shownResults && shownResults.map(result => <Emoji key={result.slug + Math.ceil(Math.random() * 9999)} emoji={result} />)}
      </InfiniteScroll>

    </div>
  )
}
