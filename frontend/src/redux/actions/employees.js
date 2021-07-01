import { createAction } from 'redux-api-middleware';

export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

export const POST_EMPLOYEES_REQUEST = 'POST_EMPLOYEES_REQUEST';
export const POST_EMPLOYEES_SUCCESS = 'POST_EMPLOYEES_SUCCESS';
export const POST_EMPLOYEES_FAILURE = 'POST_EMPLOYEES_FAILURE';


export const GET_EMPLOYEE_REQUEST = 'GET_EMPLOYEE_REQUEST';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_FAILURE = 'GET_EMPLOYEE_FAILURE';

export const DELETE_EMPLOYEE_REQUEST = 'DELETE_EMPLOYEE_REQUEST';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_FAILURE = 'DELETE_EMPLOYEE_FAILURE';

export const UPDATE_EMPLOYEE_REQUEST = 'UPDATE_EMPLOYEE_REQUEST';
export const UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS';
export const UPDATE_EMPLOYEE_FAILURE = 'UPDATE_EMPLOYEE_FAILURE'

export const RESET_LAZY_LIST ='RESET_LAZY_LIST';
export const RESET_EMPLOYEE ='RESET_EMPLOYEE';


export const getEmployees = () =>
    createAction({
        endpoint: `/api/employees`,
        method: 'GET',
        types: [
            GET_EMPLOYEES_REQUEST,
            GET_EMPLOYEES_SUCCESS,
            GET_EMPLOYEES_FAILURE
        ]
    })

    export const createEmployees = (employee) =>
    createAction({
        endpoint: `/api/employees`,
        method: 'POST',
        body: JSON.stringify(employee),
        headers: { 'Content-Type': 'application/json' },
        types: [
            POST_EMPLOYEES_REQUEST,
            POST_EMPLOYEES_SUCCESS,
            POST_EMPLOYEES_FAILURE
        ]
    })    



export const getEmployee = id =>
    createAction({
        endpoint: `/api/employee/${id}`,
        method: 'GET',
        types: [
            GET_EMPLOYEE_REQUEST,
            GET_EMPLOYEE_SUCCESS,
            GET_EMPLOYEE_FAILURE
        ]
    })

export const deleteEmployee = id =>
    createAction({
        endpoint: `/api/employee/${id}`,
        method: 'DELETE',
        types: [
            DELETE_EMPLOYEE_REQUEST,
            DELETE_EMPLOYEE_SUCCESS,
            DELETE_EMPLOYEE_FAILURE
        ]
    })
export const updateEmployee = (employee) =>
    createAction({
        endpoint: `/api/employee/${employee.id}`,
        method: 'PUT',
        types: [
            UPDATE_EMPLOYEE_REQUEST,
            UPDATE_EMPLOYEE_SUCCESS,
            UPDATE_EMPLOYEE_FAILURE
        ]
    })


export const resetLazyList= () =>
    ({type: RESET_LAZY_LIST})

export const resetEmployee= () =>
    ({type: RESET_EMPLOYEE})
