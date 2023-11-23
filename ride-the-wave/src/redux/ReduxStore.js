import { combineReducers } from '@reduxjs/toolkit';
import recordsReducer from './recordsReducer';
import userReducer from './usersReducer';
import commentsReducer from './commentsReducer';
import developedDataReducer from './developedDataReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    records: recordsReducer,
    users: userReducer,
    comments: commentsReducer,
    developedData: developedDataReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["records", "users", "comments", "developedData"]
}

export default persistReducer(persistConfig, rootReducer);