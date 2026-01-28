import OneStudent from "./OneStudent";

function Students({people}) {
  return (
    <div>
      <h2>Students</h2>
      <ul>
        {people.slice(2).map((person) => (
         <OneStudent student={person} />
        ))}
      </ul>
    </div>
  );
}

export default Students;
