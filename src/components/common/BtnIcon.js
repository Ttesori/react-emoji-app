function BtnIcon({ children, handleOnClick }) {
  return (
    <button className="btn-icon" onClick={handleOnClick || undefined}>
      {children}
    </button>
  )
}

BtnIcon.defaultProps = {
  handleOnClick: () => console.log('clicked'),
}

export default BtnIcon;