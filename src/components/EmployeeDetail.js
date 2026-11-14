import React from 'react';
import { Link, useParams } from 'react-router-dom';

function EmployeeDetail(props) {
  // useParams reads the :id part of the URL, like /employees/1793547205504
  const { id } = useParams();

  // URL values are strings, so compare them as strings
  const employee = props.employees.find(
    (emp) => String(emp.EmployeeId) === id
  );

  // Friendly message if the link is old or the employee was not found
  if (!employee) {
    return (
      <div className="employee-detail">
        <h2>Employee not found</h2>
        <p>This employee may have been removed or the link is incorrect.</p>
        <Link to="/">Back to employee list</Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <h2>Employee Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{employee.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{employee.phone}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <Link to="/">Back to employee list</Link>
      </p>
    </div>
  );
}

export default EmployeeDetail;