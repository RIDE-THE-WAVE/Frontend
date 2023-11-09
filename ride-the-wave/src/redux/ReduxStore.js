import { configureStore, combineReducers } from '@reduxjs/toolkit';
import recordsReducer from './recordsReducer';
import userReducer from './usersReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    records: recordsReducer,
    users: userReducer,
    comments: commentsReducer,
});

const ReduxStore = configureStore({
    reducer: rootReducer
});

export default ReduxStore;