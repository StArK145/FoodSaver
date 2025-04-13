import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";


// Returns true if user is logged in and has browserLocalPersistence
export const isLoggedInWithPersistence = async () => {
    console.log(auth.currentUser);
    
    return !!auth.currentUser;
    
};
export const logoutUser = async () => {
    const [isLogin,setLogin] =useState(null) 
    try {
      await signOut(auth);
      setLogin(true)
      console.log("User signed out successfully.");
    } catch (error) {
        setLogin(false)
      console.error("Logout error:", error.message);
    }
  };