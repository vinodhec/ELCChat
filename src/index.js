import React from 'react'
import ReactDOM from 'react-dom'
import Registration from './components/Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContactList from './components/ContactList'
import Login from './components/Login'
import ChatList from './components/ChatList'
import Chat from './components/Chat'
import AddContact from './components/AddContact'
import {store} from './store/store'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}>
<BrowserRouter>
<Routes>

<Route path="/" element={  <Login />}  />
    <Route path="/register" element={  <Registration />}  />
    <Route path="/login" element={  <Login /> }  />
    <Route path="/contactlist" element={  <ContactList />}  />
    <Route path="/addcontact" element={  <AddContact />}  />
    <Route path="/chatlist" element={  <ChatList/>}  />
    <Route path="/chat" element={  <Chat/>}  />
    <Route path="*" element={  <div>Url not found</div>}  />

    </Routes>
    </BrowserRouter>
</Provider>, document.getElementById('root'))

//create account
//login
//add contacts
//delete contacts
//contact list
//clicking that contact should open chat between contact and you.
//we can start the chat

// redux
// user details
// Chat history
// contact list