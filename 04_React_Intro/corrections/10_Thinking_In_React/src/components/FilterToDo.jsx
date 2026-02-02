
function FilterToDo({setFilter}) {
  const setFilteredInView = (filter) => {
    setFilter(filter)
  }
  return (
    <div className='mb-4 flex space-x-2'>
      <button onClick={() => setFilteredInView('all')} className='bg-gray-200 text-black px-3 py-1 rounded'>
        All
      </button>
      <button onClick={() => setFilteredInView('active')} className='bg-gray-200 text-black px-3 py-1 rounded'>
        Active
      </button>
      <button onClick={() => setFilteredInView('completed')} className='bg-gray-200 text-black px-3 py-1 rounded'>
        Completed
      </button>
    </div>
  );
}

export default FilterToDo