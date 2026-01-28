const Button = ({text, event, lightMode}) => {
  console.log(lightMode)
    return (
      <button onClick={event}
        className={`${lightMode ? 'bg-blue-500' : 'bg-pink-500'} text-white font-bold rounded px-4 py-1`}
      >
       {text}
      </button>
    );
}

export default Button;