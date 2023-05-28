import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContest = createContext();

const auth= getAuth(app);
const AuthProvider = ({children}) => {

    const[user, setUser] = useState({})
    const[loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
// Google
const googleSignIn= () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}
// Create
const createUser=(email, password)=>{
    setLoading(true);
    createUser
    return createUserWithEmailAndPassword(auth, email, password);
}
// Sign In
const signIn=(email,password)=>{
    setLoading(true);
 
    return signInWithEmailAndPassword(auth, email, password);
 }
// Logout  
const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser);
        setLoading(false);
   });
   return()=> {
       unsubscribe();
   };
},[])

const authInformation={
    createUser,
    signIn,
    logOut,
    user,
    loading,
    googleSignIn
}


    return (
        <div>
             <AuthContest.Provider value={authInformation}>
                {children}
            </AuthContest.Provider>
        </div>
    );
};

export default AuthProvider;