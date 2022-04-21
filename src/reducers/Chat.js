
const initialState=[{
    contactId:'123',
    texts:[{
        text:'Hi..',
        date:'19/04/2022',
        time:'20:30',
        isSent:false,
    },{
        text:'Hello..',
        date:'19/04/2022',
        time:'20:29',
        isSent:true,
    }],
    userId:'214',
    name:'Arun',
    img:'https://randomuser.me/portraits/men/66.jpg'
    
},
{
    contactId:'100',
    texts:[{
        text:'Please join the call',
        date:'20/04/2022',
        time:'08:30',
        isSent:false,
    },{
        text:'Joining',
        date:'20/04/2022',
        time:'20:29',
        isSent:true,
    }],
    userId:'214',
    name:'Prem',
    img:'https://randomuser.me/portraits/men/23.jpg'

    
}
];

export default (state =initialState,action)=>{
if(action.type === 'SEND_CHAT'){
    const temp = [...state]
    const contactIndex = state.findIndex((chat)=>{
        return chat.contactId ===action.contactId
    });

    const chatMessage ={
        text:action.value,
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString(),
        isSent:true,
    }

    temp[contactIndex].texts.push(chatMessage);
    return temp
}
    return state
}