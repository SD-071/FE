import dog from "./assets/images.webp";
import Button from "./components/Button";
import Counter from "./components/Counter"

function App() {
  const name = 'Maria';
  const age = 12;
  const people = [
    { id: 1, name: 'Paul', age: 34 },
    { id: 2, name: 'Lola', age: 31 },
    { id: 3, name: 'Pepita', age: 55 },
    { id: 4, name: 'John', age: 31 },
  ];
  let counter = 5;
  return (
    <div className="flex flex-col gap-4 items-center justify-around">
      <h1 className="text-xl font-bold text-blue-900">Vite + React</h1>
      <p>My name is {name}</p>
      <p>{age > 17 ? 'I am an adult' : 'I am a minor'}</p>
      <h2>Students</h2>
      <ul>
        {people.slice(2).map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
      <img
        alt='dog'
        src={dog}
        width="50%"
      />
      <Button />
      <Counter count={counter} name="Maria" age={age} people={people} />
    </div>
  );
}

export default App;
