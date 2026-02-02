
function Counter({count, setCount}) {
  return (
    <div className="counter">
        <button className="button" onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button className="button" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter;