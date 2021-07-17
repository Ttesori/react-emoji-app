import AppContext from '../../contexts/app-context';
import { FaRegCopy, FaHeart, FaRegHeart } from "react-icons/fa";
import BtnIcon from "../common/BtnIcon";
import { useContext, useState, useMemo } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast, Zoom } from 'react-toastify';
import ACTIONS from '../../reducers/app-actions'
import 'react-toastify/dist/ReactToastify.css';


export default function Emoji({ emoji }) {
  const { favorites, dispatch } = useContext(AppContext);
  const [copied, setCopied] = useState(false);

  const isFavorite = (emoji) => favorites.some(favorite => emoji.slug === favorite.slug);

  // const localToggleFavorite = (id) => {
  //   dispatch({
  //     type: ACTIONS.TOGGLE_FAVORITE,
  //     payload: {
  //       id
  //     }
  //   })
  // }

  const localToggleFavorite = (emoji) => {
    dispatch({
      type: ACTIONS.TOGGLE_FAVORITE,
      payload: {
        emoji
      }
    })
  }

  const handleOnCopy = (char) => {
    toast.success(`${char} Emoji copied!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
    });
    console.log('copied');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (emoji.character.length > 0) && (
    <article className="emoji bg-gray-100 rounded p-3 text-center flex flex-col justify-between items-center">
      <span className="text-5xl">{emoji.character}</span>
      <h3 className="text-xs uppercase text-gray-500 mt-2">{emoji.unicodeName}</h3>

      <footer className="mt-2">
        <CopyToClipboard text={emoji.character}
          onCopy={() => handleOnCopy(emoji.character)}>
          <button className={`btn-icon ${copied}`}><FaRegCopy /></button>
        </CopyToClipboard>

        <BtnIcon handleOnClick={() => localToggleFavorite(emoji)}>{isFavorite(emoji) ? <FaHeart /> : <FaRegHeart />}</BtnIcon>
      </footer>

    </article>
  )
}
