import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Register.css"
const Register = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const fetchData = async()=>{
        const response = await fetch("http://localhost:5000/");
        const data =  await response.json()
        console.log(data);
    }
    useEffect(()=>{
        fetchData()
    }, []);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
    const postData = () =>{
        if(!passwordRegex.test(password)){
            alert("password must contain minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
        }

        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userName:userName,
                password:password,
                confirmPassword:confirmPassword
            })
        }).then(res=>res.json()).then(data=>{
            if(data.error){
                alert("error in registration")
            }
            else{
                alert("registration sucessful");
                navigate("/signin");
            }
        })
    }


    return (
        <div className="register-container">
           <div className='register-form'>
            <div className="login-logo">
            {/* <i class="fa-solid fa-user"></i> */}
            <i class="fa-solid fa-pen"></i>
            </div>
            <h1>Register</h1>
            <input type="text" placeholder='user name...' value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
            <br />
            <input type="password" placeholder='password...' value={password} onChange ={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <input type="password" placeholder='confirm password...' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
            <br />
            <button   className="register" value="Sign Up" onClick={()=>postData()}>Register</button>
            <p>If you are already registered, click here<span><Link to="/">Sign in</Link></span></p>
           </div>
          
        </div>
    )
}

export default Register
