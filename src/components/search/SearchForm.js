import { AppContext } from '../App';
import { useContext } from "react";

export default function SearchForm() {
  const { emojis, searchTerm, setSearchResults, setSearchTerm } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearchResults('loading');
    e.preventDefault();
    let found = emojis.filter(emoji => emoji.slug.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(found);
    found.length > 0 ? setSearchResults(found) : setSearchResults(-1);
  }
  return (
    <form className="flex flex-col justify-center items-center w-full">
      <label htmlFor="search" className="sr-only">Search The Emojis</label>
      <div className="fieldset flex w-full">
        <input className="px-5 py-2 border rounded mr-2 flex-1" type="text" placeholder="Search..." id="search" onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="bg-gray-300 px-5 py-2 rounded" onClick={handleSearch}>Search</button>
      </div>

    </form>
  )
}
