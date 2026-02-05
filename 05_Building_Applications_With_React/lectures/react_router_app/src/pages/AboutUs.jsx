import { Link } from "react-router-dom"
function AboutUs({students}) {
  return (
    <section className="">
      <ul>
        {students.map((student) => <li><Link to={`/students/${student.id}`}>{student.name}</Link></li>)}
      </ul>
    </section>
  )
}

export default AboutUs