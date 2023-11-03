import React, { useState } from 'react'
import axios from "axios"

import "../App.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const nav = useNavigate()
    const [User, setUser] = useState({
        email: "",
        password: ""
    })
    const [MSG, setMSG] = useState("")
    function InputHandler(e) {
        setUser({ ...User, [e.target.name]: e.target.value })
    }
    async function registerUser(e) {
        e.preventDefault()
        await axios.post("https://node-handson-four-server.onrender.com/login", User)
            .then((res) => {
                console.log(res.data.msg)
                setMSG(res.data.msg)
                // if (res.data.token) {
                //     nav("/")
                // }
            })
            .catch(err => console.log(err.response.msg))
    }

    return (
        <div>
            <div className='loginParent'>
                <form className='loginForm'>
                    <h1>Welcome Back</h1>
                    <h3>Login Page</h3>
                    <br /><label id='email' >Email:</label>
                    <input type='email' required id='email' placeholder='Email' name='email' onChange={InputHandler} />
                    <br /><label id='password' >Password</label>
                    <input type='password' id='password' required placeholder='Password' name='password' onChange={InputHandler} />
                    <br /><button type='button' onClick={registerUser}>Submit</button>
                </form>
                <button type='button' style={{ margin: "10px" }} onClick={() => nav("/register")}>Create Account</button>
                <div className='loginImage'>
                    <h1>Welcome Image</h1>
                    <h3>{MSG}</h3>
                </div>
            </div>
        </div>
    )
}

export default Login