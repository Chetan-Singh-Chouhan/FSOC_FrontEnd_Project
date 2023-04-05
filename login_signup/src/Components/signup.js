import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    async function submitHandler(e) {
        e.preventDefault();
        const jsonData = await fetch('http://localhost:3000/register-user', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        const data = await jsonData.json();

        if (!data.status) {
            window.alert(data.message);
        } else {
            window.alert(data.message);
            navigate('/login')
        };
    };


    return (
        <div className='register'>
            <form method='POST'>
                <input className='input' name="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <br />  <br />
                <input className='input' name="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /> <br />
                <input className='input' name="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /> <br />
                <button onClick={(e) => submitHandler(e)} >Submit</button>
            </form>
        </div>
    );
};

export default Register;
