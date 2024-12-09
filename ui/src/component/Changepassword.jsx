import React, { useState } from "react";

const Changepassword = () => {
  // State variables for passwords and messages
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Mock "current password" for demonstration purposes
  const currentPassword = "123456";

  // Handle the password change process
  const handleChangePassword = (e) => {
    e.preventDefault();

    // Validate the old password
    if (oldPassword !== currentPassword) {
      setMessage("Old password is incorrect.");
      return;
    }

    // Validate that the new password and confirm password match
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    // Success message
    setMessage("Password changed successfully!");

    // Clear inputs
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div style={styles.container}>
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Old Password:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Change Password
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "green",
  },
};

export default Changepassword;
