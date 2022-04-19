import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default ()=>{
    const navigate = useNavigate();
    const users = useSelector(state => {
        return state.users
    });
    //use selector will be called everytime when there state updates in store through reducers.
    //use selector will call this function, with store's state, if you want u can use it.
    // whatever u return with the callback function u pass to useSelector, will be assigned to that variable.
    console.log(users);

    const [user, setUser] = useState({})

    const updateValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const login = () => {
        if (users.some(usr => usr.phoneNo === user.phoneNo && usr.pass === user.pass)) {
            navigate('/chatlist');
        } else {
            alert('failed to login');
        }
    }
return <div>
    <input onChange={updateValue} name="phoneNo" placeholder="Phone No" />
    
<input name="pass" onChange={updateValue} type="pass" placeholder="Password" />
<button onClick={login}> Login</button>
</div>

}