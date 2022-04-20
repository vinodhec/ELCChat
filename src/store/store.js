import {createStore,combineReducers} from 'redux'

import userReducer from './../reducers/User'

import contactReducer from './../reducers/Contact'
import chatReducer from './../reducers/Chat'


export const store = createStore(combineReducers({
    chats:chatReducer,
    users: userReducer,
    contacts: contactReducer
}))



