export default function Emoji({ emoji }) {
  console.log(emoji.character.length);
  return (emoji.character.length > 0) && (
    <article className="bg-gray-100 rounded p-3 text-center flex flex-col justify-between">
      <h3>{emoji.unicodeName}</h3>
      <span className="text-5xl">{emoji.character}</span>
      <p className="text-xs uppercase text-gray-500 mt-3">{emoji.group}</p>
    </article>
  )
}
