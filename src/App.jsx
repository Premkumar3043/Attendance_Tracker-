import { useState } from "react";
import AttendanceCard from "./components/AttendanceCard";
import "./App.css";

const studentData = [
  { id: 1, name: "Rahul Sharma", rollNumber: "23CS101", status: "Not Marked" },
  { id: 2, name: "Priya Reddy", rollNumber: "23CS102", status: "Not Marked" },
  { id: 3, name: "Arjun Kumar", rollNumber: "23CS103", status: "Not Marked" },
  { id: 4, name: "Sneha Patel", rollNumber: "23CS104", status: "Not Marked" }
];

function App() {
  const [students, setStudents] = useState(studentData);

  const updateAttendance = (id, status) => {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  };

  const present = students.filter(s => s.status === "Present").length;
  const absent = students.filter(s => s.status === "Absent").length;

  return (
    <div className="container">
      <header>
        <h1>🎓 Student Attendance Tracker</h1>
        <p>Manage Student Attendance Dashboard</p>
      </header>

      <div className="summary">
        <div className="summary-card">
          <h3>Total Students</h3>
          <h1>{students.length}</h1>
        </div>

        <div className="summary-card">
          <h3>Present</h3>
          <h1>{present}</h1>
        </div>

        <div className="summary-card">
          <h3>Absent</h3>
          <h1>{absent}</h1>
        </div>

        <div className="summary-card">
          <h3>Not Marked</h3>
          <h1>{students.length - present - absent}</h1>
        </div>
      </div>

      <h2>Student Records</h2>

      <div className="student-list">
        {students.map((student, index) => (
          <AttendanceCard
            key={student.id}
            studentNumber={index + 1}
            name={student.name}
            rollNumber={student.rollNumber}
            status={student.status}
            onPresent={() => updateAttendance(student.id, "Present")}
            onAbsent={() => updateAttendance(student.id, "Absent")}
          />
        ))}
      </div>
    </div>
  );
}

export default App;