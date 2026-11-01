import '../EmployeeForm.css';
import React, { useState } from 'react';

function EmployeeForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Step 6: update state when an input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 7: send the new employee up to App, then clear the form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      EmployeeId: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
    setFormData({ name: '', email: '', phone: '' });
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
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
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