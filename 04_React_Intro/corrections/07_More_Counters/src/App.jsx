import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  return (
    <div className='app'>
      <div className='counterContainer'>
        <h1>More Counters</h1>
        <Counter count={count1} setCount={setCount1} />
        <Counter count={count2} setCount={setCount2} />
        <Counter count={count3} setCount={setCount3} />
      </div>
    </div>
  );
}

export default App;
