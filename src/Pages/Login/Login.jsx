import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { signIn, signUp } from '../../Components/Firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign Up")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const userAuth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if(signState === 'Sign In'){
      await signIn(email, password)
    }else{
      await signUp(name, email, password)
    }
    setLoading(false);
  }


  return (
    loading ? 
      <div className="loading-spinner">
       <img src={netflix_spinner} alt="" />
      </div>
    :
    <div className='login'>
    <img src={logo} alt="" className='loginLogo' />
     
     <form action="" className='loginForm'>
     <h1>{signState}</h1>
     {signState === "Sign Up" ? <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Your name' /> : <></> }
     
     <input type="email" placeholder='Your email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
     <input type="password" placeholder='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
     <button type="submit" onClick={userAuth}>{signState}</button>
     <div className="formHelp">
     <div className="remember">
     <input type="checkbox" />
     <label htmlFor="">Remember Me</label>
     </div>
     <p>Need Help?</p>
     </div>
     <div className="formSwitch">
     {signState === "Sign In" ? 
      <p>New to Netflix ? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>
      :
      <p>Already have an account ? <span onClick={() => setSignState('Sign In')}>Sign in Now</span></p>
     }
     
     
     </div>
     </form>
    </div>
  )
}

export default Login