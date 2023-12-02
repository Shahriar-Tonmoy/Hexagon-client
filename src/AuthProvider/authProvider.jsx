import { updateProfile, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser]  = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // registration
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Profile update
    const updateNewUser = (userName,photoURL) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: photoURL
          })
    }

    //Sign in
    const signInUser  = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign out
    const signOutUser  = () =>{
        setLoading(true)
        return signOut(auth);
    }

    //Sign In with Google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    //creating observer for current user 
    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, loggedInUser=>{
            setUser(loggedInUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = { 
        user, 
        createNewUser, 
        signInUser, 
        signOutUser,
        signInWithGoogle,
        updateNewUser, 
        loading 
    };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
