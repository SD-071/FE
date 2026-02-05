
function CharacterList({people}) {
  return (
    <ul className='grid sm:grid-cols-2 gap-4'>
      {people.map((person) => (
        <li key={person.uid} className='bg-white p-4 rounded shadow text-center capitalize'>{person.name}</li>
      ))}
    </ul>
  );
}

export default CharacterList;