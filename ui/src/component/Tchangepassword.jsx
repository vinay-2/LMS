import React, { useState } from "react";

const Tchangepassword = () => {
  const [storedPassword, setStoredPassword] = useState("oldPassword"); // Simulated stored password
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    if (!oldPassword || !newPassword) {
      setMessage("Both fields are required.");
      return;
    }

    if (oldPassword !== storedPassword) {
      setMessage("Old password is incorrect.");
      return;
    }

    setStoredPassword(newPassword); // Update the stored password
    setMessage("Password changed successfully!");
    setOldPassword("");
    setNewPassword("");
  };

  return (
    <div>
      <h2>Change Password</h2>
      <div>
        <label>
          Old Password:
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleChangePassword}>Change Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Tchangepassword;
