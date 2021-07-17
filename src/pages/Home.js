import SearchResults from "../components/search/SearchResults";
import SearchForm from "../components/search/SearchForm";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <header className="bg-gray-300 flex p-5 justify-between">
        <h1 className="text-xl font-bold">EmojiHunt</h1>
        <h2>(Theme Switcher)</h2>
      </header>
      <main className="max-w-screen-sm mx-auto my-5 px-5 flex flex-col justify-center items-center">
        <SearchForm />
        <section>
          <h3 className="sr-only">Search Results</h3>
          <SearchResults />
        </section>
      </main>
      <ToastContainer />
    </>
  )
}
