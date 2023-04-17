import React,{useState} from "react"
import "./create_blogs.css"
import axios from "axios"
//import {useHistory} from "react-router-dom"
const Blogs=()=>{
    const [user,setUser]=useState({
        title:"",
        body:""
      
    })

    const handleChange = e => {
        const { name, value } = e.target
        
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const store_notes =()=>{
        const{title,body}=user
        if(title && body ){
            axios.post("http://localhost:3001/register", user)
            .then( res => alert(res.message))
            // .then( res => {
            //     alert(res.data.message)
            //     history.push("/login")
            // })
        }
        else alert('invalid')

    }
    return (
        <div className="create_blogs">
       
        <h1>Create Blogs</h1>
        <input type="text" name="title" value={user.title} placeholder="Your Stickynote title" onChange={ handleChange }></input>
        <input type="text" name="body" value={user.body} placeholder="Your Stickynote Description" onChange={ handleChange }></input>
        <div className="button" onClick={store_notes} >Store</div>
    </div>
    )
}

export default Blogs