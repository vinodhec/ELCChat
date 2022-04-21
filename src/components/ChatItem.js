import React from 'react';
import './ChatItem.css'
import {Link} from 'react-router-dom';
export default ({chat})=>{

     const {name,texts,img,contactId} = chat || {};
    const message= texts[texts.length-1];
    console.log(message);
    const {text,time,date} = message || {};

    return <Link to={`/chat?contactId=${contactId}`} className="chat-container">
        <img src={img} />
        <div className="details-container">
<div className="col"> <p className="contact-name">{name}</p>
<p className="text">{text}</p>
 </div>
<div class={true?'green col':'col'}>
    <p className="time">{time}</p>
</div>
        </div>
    {/* <button>test</button> */}
    </Link>

}