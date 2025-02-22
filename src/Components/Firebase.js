
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {  toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbzWnVgRI-lVhaJNzxOo5SbvIhJJc9M14",
  authDomain: "netflix-clone-5e8bb.firebaseapp.com",
  projectId: "netflix-clone-5e8bb",
  storageBucket: "netflix-clone-5e8bb.appspot.com",
  messagingSenderId: "556619023833",
  appId: "1:556619023833:web:39ffa1a884f6fe8f5345c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async(name, email, password) => {
    try {
       const res =  await createUserWithEmailAndPassword(auth, email, password)
       const user = res.user;
       await addDoc(collection(db, 'user'), {
        uid: user.uid,
        name: name,
        authProvider: 'local',
        email: email,
        
       }),
       toast.success('user created successfully')
    } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "))
    console.log(error);
     
        
    }
}


const signIn = async( email, password) => {
    try {
          await signInWithEmailAndPassword(auth, email, password),
          toast.success('user logged in successfully')
    } catch (error) {
        console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logOut = () => {
    signOut(auth)
    toast.success('user signed out successfully')
}

export{auth, db, signIn, logOut, signUp};