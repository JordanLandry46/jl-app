import React, { useState } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {
  // Load saved employees from local storage, or start with an empty list
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees');
    return saved ? JSON.parse(saved) : [];
  });

  // Save the whole array to local storage as a string
  const saveData = (list) => {
    localStorage.setItem('employees', JSON.stringify(list));
  };

  // Add the new employee to the state, then save the updated list
  const addEmployee = (employee) => {
    const updated = [...employees, employee];
    setEmployees(updated);
    saveData(updated);
  };

  return (
    <div className="App">
      <EmployeeForm onSubmit={addEmployee} />
    </div>
  );
}

export default App;