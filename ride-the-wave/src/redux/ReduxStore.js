import { configureStore, combineReducers } from '@reduxjs/toolkit';
import recordsReducer from './recordsReducer';
import userReducer from './usersReducer';
import commentsReducer from './commentsReducer';
import developedDataReducer from './developedDataReducer';

const rootReducer = combineReducers({
    records: recordsReducer,
    users: userReducer,
    comments: commentsReducer,
    developedData: developedDataReducer
});

const ReduxStore = configureStore({
    reducer: rootReducer
});

export default ReduxStore;