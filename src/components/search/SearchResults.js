import { AppContext } from '../App';
import { useContext } from "react";
import Emoji from '../emojis/Emoji';

export default function SearchResults() {
  const { searchTerm, searchResults } = useContext(AppContext);
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {searchResults && searchResults.map(result => <Emoji key={result.slug} emoji={result} />)}
    </div>
  )
}
