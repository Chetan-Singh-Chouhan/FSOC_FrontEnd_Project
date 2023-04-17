import React,{useState} from "react"
import "./register.css"
import axios from "axios"
//import {useHistory} from "react-router-dom"
const Register=()=>{
    //const history = useHistory
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const register =()=>{
        const{name,email,password,phone}=user
        if(name && email && password && phone){
            axios.post("http://localhost:3001/register", user)
            .then( res => console.log(res))
            // .then( res => {
            //     alert(res.data.message)
            //     history.push("/login")
            // })
        }
        else alert('invalid')

    }
    return (
        <div className="register">
       
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
       

        <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
        {/* <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input> */}
        <input type="text" name="phone" value={user.phone} placeholder="Your Phone" onChange={ handleChange }></input>
        <div className="button" onClick={register} >Register</div>
        <div>or</div>
        <div className="button" /*onClick={() => history.push("/login")}*/>Login</div>
    </div>
    )
}

export default Register