import React, { useState } from "react";

const ProfileSetting = () => {
const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    profilePhoto: null,
    password: "",
    interests: "",
});

const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") {
    setFormData({ ...formData, [name]: files[0] }); // Handle file input
    } else {
    setFormData({ ...formData, [name]: value });
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
    alert("Profile updated successfully!");
};

return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
    <h2>Profile Settings</h2>
    <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
        <label>Full Name:</label>
        <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        </div>

        <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        </div>

        <div style={{ marginBottom: "15px" }}>
        <label>Profile Photo:</label>
        <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            style={{ width: "100%", marginTop: "5px" }}
        />
        </div>

        <div style={{ marginBottom: "15px" }}>
        <label>Password:</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        </div>

        <div style={{ marginBottom: "15px" }}>
        <label>Interests:</label>
        <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        </div>

        <button
        type="submit"
        style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
        }}
        >
        Update Profile
        </button>
    </form>
    </div>
);
};

export default ProfileSetting;
