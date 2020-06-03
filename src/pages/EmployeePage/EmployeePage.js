import React from 'react';
import Nav from '../../components/nav/index';
import Main from '../../components/main/index';
import { useParams } from 'react-router-dom';
import Data from '../../employeeInformation.json';
import './styles.css'

function EmployeePage() {
    const { name } = useParams();
    const employees = Data

    return (
        <div>
            <Nav></Nav>
            <Main>
                <div>
                    {employees.filter(employee => employee.name === name).map(filteredEmployee => (
                        <div className="employee-main columns">
                            <div className="employee-info column">
                                <p className="employee-name">
                                    Name: {filteredEmployee.name}
                                </p>
                                <p>
                                    Branch: {filteredEmployee.branch}
                                </p>
                                <p>
                                    Department: {filteredEmployee.department}
                                </p>
                                <p>
                                    Role: {filteredEmployee.position}
                                </p>
                                <p>
                                    Email: <a href={"mailto:"+filteredEmployee.email}>{filteredEmployee.email}</a>
                                </p>
                                <p>
                                    Ext: {filteredEmployee.ext}
                                </p>
                            </div>
                            <div className="employee-image column" >
                            <img className="image" src={filteredEmployee.img} alt={filteredEmployee.name} />
                            </div>
                        </div>
                    ))}

                </div>


            </Main>



            
        </div>
    )
}

export default EmployeePage