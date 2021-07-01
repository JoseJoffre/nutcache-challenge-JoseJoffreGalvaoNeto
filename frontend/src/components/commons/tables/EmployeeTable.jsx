import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Space } from 'antd';
import { useState } from "react";
import { getEmployees, deleteEmployee, updateEmployee } from "../../../redux/actions/employees";
import { useEffect } from "react";
import RegistrationPopup from "../../modal/people/RegistrationPopup";



const EmployeeTable = () => {
    const [employee, setEmployee] = useState(false);
    const [sortedInfo, setSortedInfo] = useState({ columnKey: null });
    const [edit, setEdit] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployees())
    }
        , [])

    const employees = useSelector((state) => state.employeesState.employees.payload)








    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);


        setSortedInfo(sorter);
    };
    const handleEdit = (employee) => {
        setEmployee(employee);
        setEdit(employee.id);
    }
    const handleCreateEdit = (employee, id) => {
        dispatch(updateEmployee(employee, id))
        setEmployee(false)
    }
    const handleDelete = (id) => {
        if (window.confirm('Are you sure about that?')) {
            dispatch(deleteEmployee(id));
        }
    }



    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'CPF',
            dataIndex: 'cpf',
            key: 'cpf',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'cpf' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.length - b.email.length,
            sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'TeamID',
            dataIndex: 'teamID',
            key: 'teamID',
            sorter: (a, b) => a.teamID.length - b.email.length,
            sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
            render: (text, record) => (

                <div>
                    <Button onClick={() => handleEdit(record)} >Edit</Button>
                    <Button onClick={() => handleDelete(record.id)}>Delete</Button>
                </div>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={employees} rowKey='id' onChange={handleChange} />
            <RegistrationPopup
                visible={!!employee}
                onCreate={e => handleCreateEdit(e, edit)}
                onCancel={() => {
                    setEmployee(undefined);
                }}
                data={employee}
            />

        </>
    );

}

export default EmployeeTable;