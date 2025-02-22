import './prestyled.css'
import './w3.css'

import Home from "./Pages/Home/Home"
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './Components/Firebase'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const navigate = useNavigate()
 

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if(user){
        console.log('Logged In');
        navigate('/')
      }else{
        console.log('Logged Out');
        navigate('/login')
      }
    })
  }, [])

  return (
    <>
      <div className=''>
      <ToastContainer theme='dark' />
      <Routes>
      <Route path='/' element={ <Home />}></Route>
      <Route path='/Login' element={ <Login />}></Route>
      <Route path='/player/:id' element={ <Player />}></Route>
      </Routes>
      
   
      </div>

    </>
  )
}

export default App
