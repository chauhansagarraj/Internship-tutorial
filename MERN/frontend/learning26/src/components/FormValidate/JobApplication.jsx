import React, { useState } from "react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    resume: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    } else if (formData.experience < 0) {
      newErrors.experience = "Invalid experience";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume link is required";
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
      alert("Application Submitted!");
      console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        experience: "",
        resume: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Job Application</h2>

      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.firstName}</p>

      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.lastName}</p>

      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.email}</p>

      <input type="number" name="experience" placeholder="Experience (years)" value={formData.experience} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.experience}</p>

      <input type="text" name="resume" placeholder="Resume Link" value={formData.resume} onChange={handleChange} />
      <p style={{ color: "red" }}>{errors.resume}</p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
