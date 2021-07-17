import AppContext from '../contexts/app-context';
import { useContext } from "react";
import Favorites from "../components/emojis/Favorites";
import Main from './layouts/Main';

export default function FavoritesPage() {
  const { favorites } = useContext(AppContext);
  return (
    <Main>
      <section>
        {favorites.length > 0 ? <Favorites /> : ''}
      </section>
    </Main>

  )
}
