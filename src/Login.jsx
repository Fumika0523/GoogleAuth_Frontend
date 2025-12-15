import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Login = () => {
const loginWithGoogle=()=>{
    console.log("Please login with Google")
    window.location.href="http://localhost:8000/auth/google/"
    //Browser moves from http://localhost:5173/ → http://localhost:8000/auth/google. React is out of the picture now; it’s just the browser talking to Express.
}


  return (
    <>
    <div style={{textAlign:"center", marginTop:"80px"}}>
        <h1> Google OAuthLogin</h1>
        <button
        onClick={loginWithGoogle}>Google OAuth Login</button>
    </div>
    </>
 
  )
}

export default Login


//React >> SRA >> Routing >> It loads within App
//window.location.href