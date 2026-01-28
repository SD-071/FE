import Button from './components/Button';
import Counter from './components/Counter';
import Students from './components/Students';
import ImageComponent from './components/ImageComponent';
import { useState } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [people, setPeople] = useState([
    { id: 1, name: 'Paul', age: 34 },
    { id: 2, name: 'Lola', age: 31 },
    { id: 3, name: 'Pepita', age: 55 },
    { id: 4, name: 'John', age: 31 },
  ]);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [style, setStyle] = useState("light");
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-around h-screen p-4 ${
        lightMode ? 'bg-neutral-100' : 'bg-gray-900'
      } ${lightMode ? 'text-black' : 'text-white'}`}
    >
      <Button
        text={lightMode ? 'dark mode' : 'light mode'}
        event={() => setLightMode((prev) => !prev)}
        lightMode={lightMode}
      />
      <h1 className='text-xl font-bold'>Vite + React</h1>
      <Students people={people} />
      <ImageComponent />
      <Counter count={counter1} setCount={setCounter1} lightMode={lightMode} />
      <Counter count={counter2} setCount={setCounter2} lightMode={lightMode} />
      <div className={style}>
      <button onClick={() => style === "light" ? setStyle("dark") : setStyle("light")}>{style}</button>
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
