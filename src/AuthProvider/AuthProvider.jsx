import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading, setLoading] = useState(true);

    const GoogleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
      return createUserWithEmailAndPassword(auth,email, password);
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
           console.log('current User', currentUser);
           setUser(currentUser);
           setLoading(false)
        })
        return () => {
            unSubcribe()
        }
    },[])

    const userInfo = {
        user,
       loading,
       createUser,
       logInUser,
       signOutUser,
       signInWithGoogle
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;