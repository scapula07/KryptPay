import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,GoogleAuthProvider,
    signInWithPopup,FacebookAuthProvider,
    signOut} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAO6yG4cdAYz67-0TXTUwd-yQKXtvwYBCk",
    authDomain: "kryptpay-f5b8a.firebaseapp.com",
    projectId: "kryptpay-f5b8a",
    storageBucket: "kryptpay-f5b8a.appspot.com",
    messagingSenderId: "110684596555",
    appId: "1:110684596555:web:5bf3582531f72e9f4fe0ce",
    measurementId: "G-YKF31CZSNQ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore()
  export const auth =getAuth()
  
  export const signUp=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
export const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
export const logout=()=>{
  signOut(auth).then(() => {
   
  }).catch((error) => {
    console.log(error)
  })
}


