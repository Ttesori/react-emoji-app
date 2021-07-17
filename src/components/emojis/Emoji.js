import { AppContext } from '../App';
import { FaRegCopy, FaHeart, FaRegHeart } from "react-icons/fa";
import BtnIcon from "../common/BtnIcon";
import { useContext, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Emoji({ emoji }) {
  const { isFavorite, toggleFavorite } = useContext(AppContext);
  const [copied, setCopied] = useState(false);

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
    <article className="emoji bg-gray-100 rounded p-3 text-center flex flex-col justify-between">
      <h3 className="text-xs uppercase text-gray-500 mb-2">{emoji.unicodeName}</h3>
      <span className="text-5xl">{emoji.character}</span>
      <footer className="mt-2">
        <CopyToClipboard text={emoji.character}
          onCopy={() => handleOnCopy(emoji.character)}>
          <button className={`btn-icon ${copied}`}><FaRegCopy /></button>
        </CopyToClipboard>

        <BtnIcon handleOnClick={() => toggleFavorite(emoji.slug)}>{isFavorite(emoji.slug) ? <FaHeart /> : <FaRegHeart />}</BtnIcon>
      </footer>

    </article>
  )
}
