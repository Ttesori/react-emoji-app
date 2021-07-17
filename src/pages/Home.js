import SearchResults from "../components/search/SearchResults";
import SearchForm from "../components/search/SearchForm";
import Main from './layouts/Main';

export default function Home() {

  return (
    <Main>
      <section className="w-full">
        <h2>Search Emojis</h2>
        <SearchForm />
      </section>
      <section>
        <h3 className="sr-only">Search Results</h3>
        <SearchResults />
      </section>
    </Main>
  )
}
