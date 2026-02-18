import React, { useState } from "react";
import axios from "axios";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    isActive: false,
    password: ""
  });
  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(formData);
  };

  const submitHandler = async (data) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      console.log("Success:", response.data);
        setMessage("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
        setMessage("Error submitting form.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <label>
        Active:
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
        />
      </label>

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default MyForm;
