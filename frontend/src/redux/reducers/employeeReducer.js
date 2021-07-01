import * as EmployeeActionsTypes from '../actions/employees'

const initialState = {
    employees: {
        payload: [],
        error: null,
        loading: false,
        
    }

}


const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case EmployeeActionsTypes.GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: true
                }
            }
        case EmployeeActionsTypes.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: false,
                    payload: action.payload,
                }
            }
        case EmployeeActionsTypes.GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: false,
                    error: action.payload
                }
            }

        //GET ONE employee    
        case EmployeeActionsTypes.UPDATE_EMPLOYEE_REQUEST:
            console.log('AAAAAAAAAAAA', action.payload);
            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: false
                }
            }
        case EmployeeActionsTypes.UPDATE_EMPLOYEE_SUCCESS:
            
            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: false
                }
            }
        case EmployeeActionsTypes.UPDATE_EMPLOYEE_FAILURE:
            return {
                ...state,
                employees: {
                    ...state.employee,
                    loading: false,
                    error: action.payload
                }
            }
        
        //CREATE employee    
        case EmployeeActionsTypes.POST_EMPLOYEES_REQUEST:
            return {
                ...state,
                employee: {
                    ...state.employee,
                    loading: true
                }
            }
        case EmployeeActionsTypes.POST_EMPLOYEES_SUCCESS:

            return {
                ...state,
                employee: {
                    payload: action.payload,
                    error: action.payload.error || null,
                    loading: false,
                    deleteSuccess: false,
                },
                employees: {
                    ...state.employees,
                    payload: state.employees.payload.concat(action.payload),
                    loading: false
                }
            }
        case EmployeeActionsTypes.POST_EMPLOYEES_FAILURE:
            return {
                ...state,
                employee: {
                    ...state.employee,
                    loading: false,
                    error: action.payload
                }
            }
        //DELETE employee
        case EmployeeActionsTypes.DELETE_EMPLOYEE_REQUEST:

            return {
                ...state,
                loading: true
            }
        case EmployeeActionsTypes.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee:{
                    ...state.employee,
                    deleteSuccess: true
                },
                employees: {
                    ...state.employees,
                    loading: false,
                    payload: state.employees.payload.filter(employee => employee.id != action.payload)
                }
            }
        case EmployeeActionsTypes.DELETE_EMPLOYEE_FAILURE:

            return {
                ...state,
                employees: {
                    ...state.employees,
                    loading: false,
                    error: action.payload
                }
            }
        case EmployeeActionsTypes.RESET_LAZY_LIST:
            return {
                ...state,
                employees: {
                    ...state.employees,
                    lazyPayload:{data: [] , pagination: {} },
                }
            }
        case EmployeeActionsTypes.RESET_EMPLOYEE:
            return {
                ...state,
                employee: {
                    ...state.employee,
                    deleteSuccess: false
                }
            }
        default:
            return state;
    }

        
}

export default employeesReducer;