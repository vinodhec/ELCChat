
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
    name:'Arun'
    
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
    name:'Prem'
    
}
];

export default (state =initialState,action)=>{

    return state
}