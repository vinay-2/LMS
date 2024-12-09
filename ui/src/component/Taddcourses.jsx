import React, { useState } from "react";

const Taddcourses = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    featureImage: null,
    technologies: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Perform any further processing here (e.g., saving data locally or to a server)
    alert("Course added successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Feature Image:
        <input
          type="file"
          name="featureImage"
          onChange={handleChange}
          accept="image/*"
        />
      </label>
      <label>
        Technologies:
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        style={{
          marginTop: "10px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Taddcourses;
