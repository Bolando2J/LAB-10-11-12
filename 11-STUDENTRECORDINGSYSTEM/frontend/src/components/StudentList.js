import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="list-container">
      <h2>Student List</h2>
      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            {student.image && (
              <img
                src={`http://localhost:5000${student.image}`}
                alt="Student"
                className="student-image"
              />
            )}
            <div className="student-info">
              <h3>{student.name}</h3>
              <p>{student.course}</p>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
