import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseAppInitialize from './Firebase.init';


const googleProvider = new GoogleAuthProvider();
firebaseAppInitialize()

const useFirebase = () => {
    const [user,setUser] = useState('');
    const [error,setError] = useState('');

    const auth = getAuth();

    const googleSingIn =()=> {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                
                const user = result.user;
                setUser(user)
                // ...
            }).catch((error) => {
                
                const errorMessage = error.message;
              
                setError(errorMessage)
            });
    }


    const logOut = ()=> {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            const errorMessage = error.message;
             setError(errorMessage)
        });
    }


    const createAccountWithEmailPass = (email,password)=> {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                // ...
            })
            .catch((error) => {
               
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
    }



    const signWithEmailPass = (email,password)=> {
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
               
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }



    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
           } else {
            
            }
          });
    },[])


    return { googleSingIn,signWithEmailPass,createAccountWithEmailPass,user,error, logOut}
};

export default useFirebase;