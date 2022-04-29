import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import EmployeeService from '../services/employee.service';
import { useQuery } from 'react-query';
const EmployeeList = () => {
  const {data}=useQuery("emploee",()=>EmployeeService.getall())
  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
          {
            data?.data?.map(employee => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                {/* <td>
                  <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                  }}>Delete</button>
                </td> */}
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default EmployeeList;