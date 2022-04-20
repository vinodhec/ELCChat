
const initialState=[{
    name:'Varshan',
    phoneNo:'9475827347'
}];

export default (state =initialState,action)=>{
console.log('contact reducer', action)
if(action.type === 'ADD_CONTACT'){
    return state.concat(action.value);
}
    return state
}