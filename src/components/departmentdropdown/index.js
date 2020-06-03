import React from 'react';
import './styles.css';

function DepartmentDropdown() {
    return (

            <select className="departments">
               <option value = "Default">Select a department..</option>
               <option value = "Accounting">Accounting</option>
               <option value = "Customer Service">Customer Service</option>
               <option value = "Human Resources">Human Resources</option>
               <option value = "Management">Management</option>
               <option value = "Office Administration">Office Administration</option>
               <option value = "Sales">Sales</option>
               <option value = "Vendor Relation">Vendor Relation</option>
            </select>

    )
}

export default DepartmentDropdown