import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

const auth = getAuth(app)

export const AuthContext = createContext()
const ContextAuth = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //sign up
    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password )
    }
    //update profile
    const profileUpdate = (name, photourl)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }

    // sign In 
    const LogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out 
    const LogOut = ()=>{
        return signOut(auth)
    }

    //Google Sign In
    const SocialSingIn = (Provider)=>{
        return signInWithPopup(auth, Provider)
    }

    

    //auth state change 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            
            setUser(currentUser)
            setLoading(false)
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    



    const destructure = {user,loading, signUp, profileUpdate, LogIn, LogOut, SocialSingIn}
    return (
        <AuthContext.Provider value={destructure}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAuth;