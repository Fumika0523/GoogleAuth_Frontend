import React from 'react'

const Login = () => {

const loginWithGoogle=()=>{
    console.log("Please login with Google")
    window.location.href="http://localhost:8000/auth/google/callback"
    // use any URL >> endpoint
    //Google Open it own
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