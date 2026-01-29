import Student from "./Student";
import { students } from "../data/studentsData";

function StudentsList() {
  return (
    <div className="students">
        {students.map((student) => <Student student={student} />)}
    </div>
  )
}

export default StudentsList;