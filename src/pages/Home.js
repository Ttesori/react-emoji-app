import SearchResults from "../components/search/SearchResults";
import SearchForm from "../components/search/SearchForm";
import Main from './layouts/Main';
import AppContext from "../contexts/app-context";
import { useContext } from "react";

export default function Home() {
  const { searchResults } = useContext(AppContext);
  return (
    <Main>
      <section className="w-full pt-3 pb-5 px-5 rounded bg-white dark:bg-indigo-800 shadow-md mb-3 dark:text-indigo-100">
        <h2 className="text-xl font-bold text-center mb-2 text-indigo-800 dark:text-indigo-50"><span className="text-3xl">🧐</span> Search Emojis <span className="block sm:inline text-base font-normal">{searchResults.length > 0 ? `(${searchResults.length} found)` : ''}</span></h2>
        <SearchForm />
      </section>
      <section className="w-full">
        <h3 className="sr-only">Search Results</h3>
        <SearchResults />
      </section>
    </Main>
  )
}
