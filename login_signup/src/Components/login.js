import React, {useState} from 'react';
import User from './User';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitHandler(e) {
        e.preventDefault();
        const jsonData = await fetch('http://localhost:3000/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await jsonData.json();
        <User data={data} />
        if (!data.status) {
            window.alert("invalid login details");
        } else {
            window.alert("login successfull");
        };
    };

    return (
        <div className='register'>
            <form method='POST'>
                <input className='input' name="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /> <br />
                <input className='input' name="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /> <br />
                <button onClick={(e) => submitHandler(e)} >Submit</button>
            </form>
        </div>
    )
}

export default Login