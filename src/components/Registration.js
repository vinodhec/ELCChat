import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import InputFields from './InputFields'

export default ()=>{

const dispatch =useDispatch();
const navigate = useNavigate();

const fields =[{placeholder:'Name', name:'name'}, {placeholder:'Phone No', name:'phoneNo'},{placeholder:'Password',type:'password', name:'pass'}]

    const [user, setUser] = useState({}) 

   
    const register =()=>{
        dispatch({type:'ADD_USER',value:user});
        navigate('/login')
    }

    return <div>

<InputFields onUpdate={setUser} value={user} fields={fields} />


    <button onClick={register}> Register</button>
    {/* <Link to="/login">Login</Link> */}
    </div>

}