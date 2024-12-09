import React, { useState } from "react";

const RecommendedCourses = () => {
  // Mock Data: List of recommended courses
  const [recommendedCourses, setRecommendedCourses] = useState([
    { id: 1, name: "Advanced Python", recommendedBy: "Alice Johnson" },
    { id: 2, name: "Machine Learning", recommendedBy: "Robert Brown" },
    { id: 3, name: "UI/UX Design", recommendedBy: "Emma Wilson" },
  ]);

  // Remove a course from the recommended list
  const handleRemove = (courseId) => {
    const updatedCourses = recommendedCourses.filter(
      (course) => course.id !== courseId
    );
    setRecommendedCourses(updatedCourses);
  };

  return (
    <div style={styles.container}>
      <h2>Recommended Courses</h2>
      {recommendedCourses.length === 0 ? (
        <p>No recommended courses available.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Name</th>
              <th style={styles.headerCell}>Recommended By</th>
              <th style={styles.headerCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {recommendedCourses.map((course) => (
              <tr key={course.id}>
                <td style={styles.cell}>{course.name}</td>
                <td style={styles.cell}>{course.recommendedBy}</td>
                <td style={styles.cell}>
                  <button
                    style={styles.removeButton}
                    onClick={() => handleRemove(course.id)}
                  >
                    Remove
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
  removeButton: {
    backgroundColor: "orange",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default RecommendedCourses;
