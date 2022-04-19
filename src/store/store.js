import {createStore,combineReducers} from 'redux'

import userReducer from './../reducers/User'

import contactReducer from './../reducers/Contact'

export const store = createStore(combineReducers({
    users: userReducer,
    contacts: contactReducer
}))



