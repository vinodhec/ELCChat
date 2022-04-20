import React from 'react';
import {useSelector} from 'react-redux';
import ChatItem from './ChatItem'
export default ()=>{

    const chats = useSelector(state=> state.chats);
    console.log(chats)
    return <div>
{chats.map((chat)=>{
    return <ChatItem chat={chat} />})}
    </div>

}