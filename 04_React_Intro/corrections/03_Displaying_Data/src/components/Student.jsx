
function Student({student}) {
  return (
    <div className="student-card">
        <img className="student-picture" alt={`${student.firstName} ${student.lastName}`} src={student.picture} />
        <h2>{student.firstName} {student.lastName}</h2>
        <p> <strong>Age:</strong> {student.age}</p>
        <p> <strong>Course:</strong> {student.course}</p>
        <p> <strong>City:</strong> {student.city}</p>
    </div>
  )
}

export default Student;