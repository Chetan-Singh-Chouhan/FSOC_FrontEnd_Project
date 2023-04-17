import React,{useState} from "react"
import "./login.css"
import axios from "axios"

const Login=()=>{
    const [user,setUser]=useState({
       
        email:"",
        password:""
       
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }
    const login =()=>{
        const{email,password}=user
        if(email && password){
            axios.post("http://localhost:3001/login", user)
            .then( res => alert(res.data.message))
            
            // .then( res => {
            //     alert(res.data.message)
            //     history.push("/login")
            // })
        }
        else alert('invalid')

    }
    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div> or </div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login