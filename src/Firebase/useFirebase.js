import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseAppInitialize from './Firebase.init';


const googleProvider = new GoogleAuthProvider();
firebaseAppInitialize()

const useFirebase = () => {
    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    // google-sing-in

    const googleSingIn =()=> {
        return signInWithPopup(auth, googleProvider);           
    };

    //  logout-function

    const logOut = ()=> {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            const errorMessage = error.message;
             setError(errorMessage);
        })
        .finally(()=> {
            setIsLoading(false);
        })
        ;
    }

        //  creating-account-with-email-pass

    const createAccount = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
      }
  

    //    sign-in-with-email-pass

      const signWithEmailPass= (email,password)=> {
       return signInWithEmailAndPassword(auth,email,password);
      }
   
    // user-state-management-function
    
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
           } else {
            setUser({})
            }
          })
          setIsLoading(false);
          
    },[])


    return { googleSingIn,signWithEmailPass,createAccount,auth,user,setUser,error,setError, logOut,isLoading,setIsLoading}
};

export default useFirebase;