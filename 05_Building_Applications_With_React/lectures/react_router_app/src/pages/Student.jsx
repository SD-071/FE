import { useParams } from "react-router-dom";

function Student({students}) {
    const {id} = useParams();
    console.log(typeof id)
    const foundStudent = students.find((student) => student.id == id);
    console.log(foundStudent)
  return (
    <div>
        <h2>{foundStudent.name}</h2>
    </div>
  )
}

export default Student;