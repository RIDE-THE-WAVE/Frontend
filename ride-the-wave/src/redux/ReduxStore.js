import { configureStore, combineReducers } from '@reduxjs/toolkit';
import recordsReducer from './recordsReducer';
import userReducer from './usersReducer';
import reviewReducer from './recordsReducer';

const rootReducer = combineReducers({
    records: recordsReducer,
    user: userReducer,
    review: reviewReducer,
});

const ReduxStore = configureStore({
    reducer: rootReducer
});

export default ReduxStore;