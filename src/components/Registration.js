import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
export default ()=>{

const dispatch =useDispatch();
const navigate = useNavigate();


    const [user, setUser] = useState({}) 

    const updateValue =(e)=>{
        setUser({...user ,[e.target.name] : e.target.value})
    }
    const register =()=>{
        dispatch({type:'ADD_USER',value:user});
        navigate('/login')
    }

    return <div><input onChange={updateValue} name="phoneNo" placeholder="Phone No" />
    
    <input name="name" onChange={updateValue} placeholder="Name" />
    <input name="pass" onChange={updateValue} type="pass" placeholder="Password" />
    <button onClick={register}> Register</button>
    {/* <Link to="/login">Login</Link> */}
    </div>

}