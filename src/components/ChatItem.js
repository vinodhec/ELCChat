import React from 'react';
import './ChatItem.css'

export default ({chat})=>{

     const {name,texts} = chat || {};
    const [message,] = texts;
    const {text,time,date} = message || {};

    return <button>{name} {text} {time} {date}
    {/* <button>test</button> */}
    </button>

}