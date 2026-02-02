import './App.css';
import LightBulb from './components/LightBulb.jsx';
import { useState } from 'react';

function App() {
  const [isOn, setIsOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const maxTimes = 3;
  const handleToggle = () => {
    if(!isOn && counter >= maxTimes) {
      alert("You have reach the limit!")
      return;
    }
    setIsOn((prevIsOn) => !prevIsOn);
    if(isOn === true) {
      setCounter((count) => count + 1)
    }
  };
  const buttonLabel = counter >= maxTimes ? "Locked" : isOn ? "Turn off" : "Turn on";
  const handleReset = () => {
    setIsOn(false);
    setCounter(0);
  }
  return (
    <>
      <button onClick={handleToggle}>{buttonLabel}</button>
      <button onClick={handleReset}>Reset</button>
      <LightBulb isOn={isOn} />
    </>
  );
}

export default App;
