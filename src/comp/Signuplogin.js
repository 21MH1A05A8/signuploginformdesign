import React, { useState } from 'react'
import './Signuplogin.css'
const Signuplogin = () => {
    const[state ,setState]=useState("Sign Up")
  return (
    <div className='container'>
        <div className='tag'>
            <div className='formname' style={{color:"blue"}}> {state}</div>
            <div className='underline'></div>
        </div>
        <div className='inputfields'>
            <input type='text' placeholder='enter your name' />
            <input type='email' placeholder='enter your Email'  className={state==="Login"?"unvisible":"visible"}/>
            <input type='password' placeholder='enter your Password' />
        </div>
        <div className={state==="Sign Up"?"unvisible":'forgetpassword'} >
            LostPassword?<span>click here</span>
        </div>
        <div className='buttons'>
            <button onClick={()=>setState("Login")}  className={state==="Login"?"submitgray":"submit"}>Login</button>
            <button onClick={()=>setState("Sign Up")} className={state==="Sign Up"?"submitgray":"submit"}>Sign Up</button>
        </div>
    </div>
  )
}

export default Signuplogin
