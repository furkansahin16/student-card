import { useState } from "react";
import Header from "./components/shared/header/Header.js"
import "./App.scss";

/**Hata Çıktıları*/
const formError = {
  nameErr: "!Name cannot be empty",
  nameLengthErr: "!Name cannot have length less than 3",
  courseErr: "!Course name cannot be empty",
  scoreErr: "!Score must be between 0 and 100",
};
/**İsim kontrolü*/
const checkName = name => {
  if (!name.trim()) return formError.nameErr;
  else if (name.trim().length < 3) return formError.nameLengthErr;
  else return false;
};

function App() {
  /**State değişkenleri*/
  /**Input states */
  const [nameInput, setNameInput] = useState();
  const [courseInput, setCourseInput] = useState();
  const [instructorInput, setInstructorInput] = useState();
  const [scoreInput, setScoreInput] = useState();
  /**Error state */
  const [errorState, setErrorState] = useState(false);
  /**Array state */
  const [students, setStudents] = useState([]);
  /**Input metinlerini temizler*/
  const clearInputs = () => {
    setNameInput("");
    setCourseInput("");
    setInstructorInput("");
    setScoreInput("");
  };
  /**Button click event fonksiyonu*/
  const handleAddStudent = event => {
    event.preventDefault();
    if (checkName(nameInput) || !courseInput || checkName(instructorInput) || !(scoreInput >= 0 && scoreInput <= 100)) {
      setErrorState(true);
    } else {
      setStudents(current => [
        ...current,
        { id: `${Date.now()}${Math.floor(Math.random() * 100)}`, nameInput, courseInput, instructorInput, scoreInput },
      ]);
      clearInputs();
      setErrorState(false);
    }
  };
  /**Html return expression*/
  return (
    <div className="App">
    <Header/>
      <form className="student-submit">
        <input
          type="text"
          placeholder="Enter student name..."
          onChange={event => setNameInput(event.target.value)}
          value={nameInput}
        />
        <p>{errorState && checkName(nameInput)}</p>
        <input
          type="text"
          placeholder="Enter course name..."
          onChange={event => setCourseInput(event.target.value)}
          value={courseInput}
        />
        <p>{!courseInput && errorState && formError.courseErr}</p>
        <input
          type="text"
          placeholder="Enter instructor name..."
          onChange={event => setInstructorInput(event.target.value)}
          value={instructorInput}
        />
        <p>{errorState && checkName(instructorInput)}</p>
        <input
          type="text"
          placeholder="Enter score..."
          onChange={event => setScoreInput(event.target.value)}
          value={scoreInput}
          S
        />
        <p>{(!(scoreInput >= 0 && scoreInput <= 100) || !scoreInput) && errorState && formError.scoreErr}</p>
        <button onClick={event => handleAddStudent(event)}>Submit Student</button>
      </form>
      {students.length !== 0 && (
        <section>
          <h2>Students</h2>
          <div className="student-card-container">
            {console.log(students)}
            {students.map(student => (
              <div key={student.id} className="student-card">
                <p>
                  Student Name : <span>{student.nameInput.toUpperCase()}</span>
                </p>
                <p>
                  Course :<span>{student.courseInput.toUpperCase()}</span>
                </p>
                <p>
                  Instructor Name : <span>{student.instructorInput.toUpperCase()}</span>
                </p>
                <p>
                  Score :<span>{student.scoreInput.toUpperCase()}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
