import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';
import axios from 'axios';

export const MyAuthContext = createContext(null);

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const emailCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

            const email = currentUser?.email || user?.email;
            const loggedUser = { email: email };

            if (currentUser) {
                axios.post('https://food-shareing-serversite.vercel.app/jwt', (loggedUser), { withCredentials: true })
                    .then(res => {
                        console.log("token ", res.data)
                    });
            } else {
                axios.post('https://food-shareing-serversite.vercel.app/logout', (loggedUser), { withCredentials: true })
                    .then(res => {
                        console.log("token ", res.data)
                    });
            }

        })
        return (() => {
            unSubscribe();
        })
    })

    // console.log(user)

    const contextValue = {
        user,
        loading,
        emailCreateUser,
        emailLogin,
        googleLogin,
        logOut,
    };

    return (
        <MyAuthContext.Provider value={contextValue}>
            {children}
        </MyAuthContext.Provider>
    )
}

export default AuthContext