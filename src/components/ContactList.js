import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export default ()=>{
    const contacts = useSelector(state => state.contacts)
    console.log(contacts)
    return <div>
{contacts.map(contact=>{
   return <p>{contact.name} {contact.phoneNo}</p>
})}

<Link to="/addcontact" >Add a new contact</Link>
    </div>

}