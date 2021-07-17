import AppContext from '../contexts/app-context';
import SearchResults from "../components/search/SearchResults";
import SearchForm from "../components/search/SearchForm";
import { ToastContainer } from "react-toastify";
import Favorites from "../components/emojis/Favorites";
import { useContext } from "react";

export default function Home() {
  const { favorites } = useContext(AppContext);
  return (
    <>
      <header className="bg-gray-300 flex p-5 justify-between">
        <h1 className="text-xl font-bold">EmojiHunt</h1>
        <h2>(Theme Switcher)</h2>
      </header>
      <main className="max-w-screen-md mx-auto my-5 px-5 flex flex-col justify-center items-center">
        <section>
          {favorites.length > 0 ? <Favorites /> : ''}
        </section>

        <section className="w-full">
          <h2>Search Emojis</h2>
          <SearchForm />
        </section>
        <section>
          <h3 className="sr-only">Search Results</h3>
          <SearchResults />
        </section>
      </main>
      <ToastContainer />
    </>
  )
}
