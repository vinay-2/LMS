import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const ULogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here, such as clearing session or local storage
    navigate('/signin'); // Redirect to SignIn page
  };

  return (
    <div className="logout-container">
      <h2 className="logout-heading">Are you sure you want to logout?</h2>
      <div className="logout-buttons">
        <button className="logout-yes-button" onClick={handleLogout}>
          Yes, Logout
        </button>
        <button className="logout-cancel-button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ULogout;
