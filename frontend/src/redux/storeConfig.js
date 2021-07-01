import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import employeesReducer from './reducers/employeeReducer';


import logger from 'redux-logger';

const rootReducer = combineReducers({
    employeesState: employeesReducer,
})

const storeConfig = () => createStore(
    rootReducer,
    undefined, ///DESCUBRA
    applyMiddleware(thunk, apiMiddleware, logger)
);


export default storeConfig;