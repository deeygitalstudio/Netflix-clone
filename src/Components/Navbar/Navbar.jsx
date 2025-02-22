import React,  {useRef, useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import drop from '../../assets/caret_icon.svg'
import { logOut } from '../Firebase'
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db} from '../Firebase'


const Navbar = () => {

  const navRef = useRef();


  const [userName, setUserName] = useState('');


  useEffect(() => {
 const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const userDoc = await getDoc(doc(db, "user", uid));

        if (userDoc.exists()) {
          const name = userDoc.data().name;
          setUserName(name);
        } else {
          console.log("No such user document!");
        }
      } else {
        console.log("No user is signed in");
      }
  
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);






  useEffect(() => {
 window.addEventListener('scroll', () => {
   if(window.scrollY >= 80){
    navRef.current.classList.add('nav-dark')
   }else{
     navRef.current.classList.remove('nav-dark')
   }
 })

  }, [])

  return (
    <div ref={navRef} className='navbars'>
    <div className="navbar-left">
     <img src={logo} alt="" />
     <ul>
     <li>Home</li>
     <li>TV shows</li>
     <li>New and Popular</li>
     <li>Browse by Languages</li>
     </ul>
    </div>
    <div className="navbar-right">
     <img src={search} alt="" className='icons' />
     <p>Children</p>
     <img src={bell} alt="" className='icons' />
     <div className="nav-profile">
      <img src={profile} alt="" className='profile' />
      <img src={drop} alt="" className='' />
      <div className="dropdown">
      <p>{userName}</p>
      <p onClick={() => logOut()}>Sign out of Netflix</p>
      </div>
     </div>
    </div>
    
    </div>
  )
}

export default Navbar