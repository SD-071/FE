export default function Counter(props) {
  console.log(props);
  console.log(props.name);
  console.log(props.age);
  console.log(props.people);
  const buttonStyle = "bg-blue-500 text-white font-bold rounded px-4 py-1"
  return (
    <div className='flex justify-around items-center w-1/3'>
      <button className={buttonStyle}>-</button>
      <span className='font-bold'>{props.count}</span>
      <button className={buttonStyle}>+</button>
    </div>
  );
}


