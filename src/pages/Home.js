import { useContext, useState } from "react"
import { AppContext } from '../components/App';
import SearchResults from "../components/search/SearchResults";

export default function Home() {
  const { setSearchTerm, emojis, setSearchResults, searchTerm } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    let found = emojis.filter(emoji => emoji.slug.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(found);
    setSearchResults(found);
  }

  return (
    <>
      <header className="bg-gray-300 flex p-5 justify-between">
        <h1 className="text-xl font-bold">EmojiHunt</h1>
        <h2>(Theme Switcher)</h2>
      </header>
      <main className="max-w-screen-sm mx-auto my-5 px-5 flex flex-col justify-center items-center">
        <form className="flex flex-col justify-center items-center w-full">
          <label htmlFor="search" className="sr-only">Search The Emojis</label>
          <div className="fieldset flex w-full">
            <input className="px-5 py-2 border rounded mr-2 flex-1" type="text" placeholder="Search..." id="search" onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="bg-gray-300 px-5 py-2 rounded" onClick={handleSearch}>Search</button>
          </div>

        </form>
        <section>
          <h3 className="sr-only">Search Results</h3>
          <SearchResults />
        </section>
      </main>
    </>
  )
}
