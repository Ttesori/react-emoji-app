import AppContext from '../../contexts/app-context';
import { useContext } from 'react';
import Emoji from './Emoji';


export default function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <>
      <h3 className="text-xl font-bold text-center mb-2"><span className="text-3xl mr-2">😍</span> My Favorite Emojis ({favorites.length})</h3>
      <div className="favorites mb-5 grid grid-cols-4 gap-4 mt-4">
        {favorites.map(favorite => <Emoji key={favorite.slug + Math.ceil(Math.random() * 9999)} emoji={favorite} />)}
      </div>
    </>

  )
}
