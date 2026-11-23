function AttendanceCard({
  studentNumber,
  name,
  rollNumber,
  status,
  onPresent,
  onAbsent
}) {
  return (
    <div className="student-card">
      <h3>Student {studentNumber}</h3>
      <h2>{name}</h2>
      <p>Roll Number: {rollNumber}</p>

      <h4>
        Attendance:
        <span className={status.toLowerCase().replace(" ", "-")}>
          {status}
        </span>
      </h4>

      <button className="present" onClick={onPresent}>
        Present
      </button>

      <button className="absent" onClick={onAbsent}>
        Absent
      </button>
    </div>
  );
}

export default AttendanceCard;