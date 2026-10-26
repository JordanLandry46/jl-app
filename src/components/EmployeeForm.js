import '../EmployeeForm.css';
import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
  });

  // Step 6: update state when an input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 7: runs when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Employee submitted:', formData);
    alert(`Saved ${formData.name}`);
  };

  // Step 5: inputs and submit button
  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Employee Form</h2>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

// Step 8: export at the bottom
export default EmployeeForm;