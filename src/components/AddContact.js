import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import InputFields from './InputFields'
export default () => {
const dispatch= useDispatch();
    const [contact, setContact] = useState({})

    const fields =[{placeholder:'Name', name:'name'}, {placeholder:'Phone No', name:'phoneNo'},{placeholder:'City',name:'city'}, {placeholder:'Home Phone No',name:'hphoneNo'},{placeholder:'Password',type:'password', name:'pass'}]
  
    const addContact=()=>{
        dispatch({type:'ADD_CONTACT', value:contact})
    }
    return <div>

       <InputFields  fields={fields} onUpdate={setContact} value={contact}  />
<button onClick={addContact}>Add Contact</button>
<Link to="/contactlist">View All Contacts</Link>
    </div>

}