import React, { useState } from "react";

const TmyUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", course: "PHP" },
    { id: 2, name: "Jane Smith", course: "ReactJS" },
  ]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    alert("User deleted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
              Name
            </th>
            <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
              Enrolled Course
            </th>
            <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                {user.name}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                {user.course}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                <button
                  onClick={() => handleDelete(user.id)}
                  style={{
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TmyUser;
