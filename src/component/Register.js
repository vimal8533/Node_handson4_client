import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {
    const nav = useNavigate()
    const [User, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    })
    const [MSG, setMSG] = useState("")
    function InputHandler(e) {
        setUser({ ...User, [e.target.name]: e.target.value })
    }
    async function registerUser(e) {
        localStorage.clear()
        e.preventDefault()
        await axios.post("https://node-handson-four-server.onrender.com/register", User)
            .then((res) => {
                console.log(res.data.msg)
                setMSG(res.data.msg)
                if (res.data.token) {
                    localStorage.setItem("Token", res.data.token)
                    nav("/")
                }
            })
            .catch(err => console.log(err.response.msg))
    }
    return (
        <div className='loginParent'>
            <form className='loginForm'>
                <h1>Register YourSelf</h1>

                <br /><label id='name' >Name:</label>
                <input type='text' id='name' required placeholder='Name' name='name' onChange={InputHandler} />
                <br /><label id='number' > Number: </label>
                <input type='number' id='number' required placeholder='Phone Number' name='phone' onChange={InputHandler} />
                <br /><label id='email' >Email:</label>
                <input type='email' required id='email' placeholder='Email' name='email' onChange={InputHandler} />
                <br /><label id='password' >Password</label>
                <input type='password' id='password' required placeholder='Password' name='password' onChange={InputHandler} />
                <br /><button type='button' onClick={registerUser}>Submit</button>
                <br />
            </form>
            <button type='button' style={{ margin: "10px" }} onClick={() => nav("/login")}>Go to Login</button>
            <div className='loginImage'>
                <h1>Welcome Image</h1>
                <h3>{MSG}</h3>
            </div>
        </div>
    )
}

export default Register