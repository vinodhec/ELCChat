import React from 'react';
import {useSelector} from 'react-redux'

export default ()=>{
    const contacts = useSelector(state => state.contacts)
    console.log(contacts)
    return <div>Contact List</div>

}