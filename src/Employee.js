import React, { Component } from "react";
import { variables } from "./variables";

export class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        fetch(variables.API_URL + 'employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ employees: data });
            });
    }

    render() {
        const { employees } = this.state;

        return (
            <div>
                <h2>Employee List</h2>
                <table className="table table-bordered border-primary">
                    <thead className="table-dark">
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Employee Department</th>
                            <th>Date Of Joining</th>
                            <th>Photo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.EmployeeId}>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{emp.DateOfJoining}</td>
                                <td>{emp.PhotoFileName}</td>
                                <td>
                                    <button className="btn btn-light mr-1">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>

                                    <button className="btn btn-light mr-1">
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
