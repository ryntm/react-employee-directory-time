import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from '../../components/nav/index';
import Main from '../../components/main/index';
import './styles.css';
import Data from '../../employeeInformation.json';

function Directory() {
    const employees = Data;

    let [filteredEmployees, setFilteredEmployees] = useState(employees);
    const nameRef = useRef();
    const departmentRef = useRef();
    const history = useHistory();

    function handleEmployeeClick(e) {
        const id = e.target.getAttribute('data-id')
        history.push(`/${id}`);
    }

    function handleSearchByName() {
        departmentRef.current.value = 'Select a department..';
        let employeeList = employees
        let nameInput = nameRef.current.value;
        employeeList = employees.filter(employee => employee.name.toLowerCase().includes(nameInput.toLowerCase()))
        setFilteredEmployees(employeeList)
    }

    function handleDepartmentChange(e) {
        let department = e.target.value;
        console.log(department)

        nameRef.current.value = '';
        
        let employeeList = employees.filter(employee => employee.department === department)
        
        setFilteredEmployees(employeeList)
    }

    return (
        <div>
            <Nav>

            </Nav>

            <Main >
            <span className="title">Directory</span>
                <div>
                    <input 
                        placeholder="Search by name.." 
                        ref={nameRef} 
                        className="search-name" 
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                            handleSearchByName();
                            }
                        }}
                    >
                    
                    </input> <button onClick={handleSearchByName}>Search</button>
                </div>
                <p className="text">or</p>
                <select className="dropdown departments" onChange={handleDepartmentChange} >
                    <option value = "Default">Select a department..</option>
                    <option value = "Accounting">Accounting</option>
                    <option value = "Customer Relation">Customer Relation</option>
                    <option value = "Human Resources">Human Resources</option>
                    <option value = "Management">Management</option>
                    <option value = "Office Administration">Office Administration</option>
                    <option value = "Sales">Sales</option>
                    <option value = "Vendor Relation">Vendor Relation</option>
                </select>

                <div className="employee-list">
                    {filteredEmployees
                    .map(filteredEmployee => (
                        <div className="employee-item">
                            <a><span ref={departmentRef} data-id={filteredEmployee.name} key={filteredEmployee.name} onClick={handleEmployeeClick}>{filteredEmployee.name}</span></a> - {filteredEmployee.position} (Ext. {filteredEmployee.ext})
                        </div>
                    ))}
                </div>
            </Main>

            
        </div>
    )
}

export default Directory