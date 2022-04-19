const initialState = [{
    firstName:'Vinodh',
    phoneNo:'9443125052',
    pass:'123456'
}]

export default (state =initialState,action)=>{

    if(action.type ==='ADD_USER'){
        return state.concat(action.value)
    }
    return state;
}