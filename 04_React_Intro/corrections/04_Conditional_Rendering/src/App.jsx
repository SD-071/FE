import './App.css';
import Student from './components/Student';

function App() {
  const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 50,
    graduate: false,
  };

  return (
    <>
      <h1>Student</h1>
      <Student student={studentData} />
    </>
  );
}

export default App;
