import React, { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 18) {
      newErrors.age = "Age must be 18 or above";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.name}</p>

      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.email}</p>

      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.password}</p>

      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.age}</p>

      <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.phone}</p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
