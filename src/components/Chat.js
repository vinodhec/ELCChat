import React,{useState} from 'react';
import {useSearchParams, Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';


export default ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
const [value, setValue] = useState('')
const dispatch= useDispatch();
const updateValue =(e)=>{
    setValue(e.target.value);

}

    const chats = useSelector((state)=>{return state.chats.filter((chat)=>chat.contactId ===  searchParams.get('contactId'))});
const [chat,] = chats;
    const {name,texts,img,contactId} = chat || {};
    const [message,] = texts;
    const {text,time,date,isSent} = message || {};
    const sendChat=()=>{
        dispatch({value,type:'SEND_CHAT', contactId});
        setValue('');
        }

    return <div>
        
        <p>{name}</p>
        <img src={img} />
      {texts.map((message)=>{
          return <p><p>{message.text}</p>{message.time}{message.isSent ?'Sent':'Received'}</p>
      })}  
      <input value={value} placeholder="type ur message"  onChange={updateValue} />      
      <button onClick={sendChat}>Send</button>
      <Link to="/chatlist">Go Back</Link>
        </div>

}