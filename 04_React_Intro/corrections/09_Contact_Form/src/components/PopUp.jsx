
function PopUp({message}) {
  return (
    <div className='popUp'>
        <h2>{message}</h2>
        <button className="button self-end text-xs" onClick={() => console.log("close")}>Close</button>
    </div>
  )
}

export default PopUp