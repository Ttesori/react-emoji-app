import SearchResults from "../components/search/SearchResults";
import SearchForm from "../components/search/SearchForm";
import Main from './layouts/Main';
import AppContext from "../contexts/app-context";
import { useContext } from "react";

export default function Home() {
  const { searchResults } = useContext(AppContext);
  return (
    <Main>
      <section className="w-full">
        <h2>Search Emojis {searchResults.length > 0 ? `(${searchResults.length} found)` : ''}</h2>
        <SearchForm />
      </section>
      <section>
        <h3 className="sr-only">Search Results</h3>
        <SearchResults />
      </section>
    </Main>
  )
}
