import React, { useState } from "react";

const FavoriteCourses = () => {
  // Mock Data: List of favorite courses
  const [courses, setCourses] = useState([
    { id: 1, name: "PHP Development", createdBy: "Shaik Siddik" },
    { id: 2, name: "React Basics", createdBy: "John Doe" },
    { id: 3, name: "JavaScript Essentials", createdBy: "Jane Smith" },
  ]);

  // Delete a course from the list
  const handleDelete = (courseId) => {
    const updatedCourses = courses.filter((course) => course.id !== courseId);
    setCourses(updatedCourses);
  };

  return (
    <div style={styles.container}>
      <h2>Favorite Courses</h2>
      {courses.length === 0 ? (
        <p>No favorite courses found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Name</th>
              <th style={styles.headerCell}>Created By</th>
              <th style={styles.headerCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td style={styles.cell}>{course.name}</td>
                <td style={styles.cell}>{course.createdBy}</td>
                <td style={styles.cell}>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
  headerCell: { padding: "10px", backgroundColor: "#f2f2f2", textAlign: "left" },
  cell: { padding: "10px", border: "1px solid #ddd" },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default FavoriteCourses;
