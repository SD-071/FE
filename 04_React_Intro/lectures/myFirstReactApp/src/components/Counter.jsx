import Button from "./Button";

export default function Counter({count, setCount, lightMode}) {
  return (
    <div className='flex justify-around items-center w-1/3'>
      <Button text='-' event={() => count > 1 ? setCount(count - 1) : setCount(1)} lightMode={lightMode} />
      <span className='font-bold'>{count}</span>
      <Button text='+' event={() => setCount(count + 1)} lightMode={lightMode} />
    </div>
  );
}


