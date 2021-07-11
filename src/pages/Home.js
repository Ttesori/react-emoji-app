import { useContext } from "react"
import { AppContext } from '../components/App';

export default function Home() {
  const theme = useContext(AppContext);
  return (
    <>
      <header>
        <h1>Hello World! - {theme}</h1>
      </header>
    </>
  )
}
