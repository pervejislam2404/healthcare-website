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

    const googleSingIn =()=> {

        return signInWithPopup(auth, googleProvider)
           
    }


    const logOut = ()=> {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            const errorMessage = error.message;
             setError(errorMessage)
        })
        .finally(()=> {
            setIsLoading(false)
        })
        ;
    }

    //   const createAccount =  createUserWithEmailAndPassword;

      
      const createAccount = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
      }
  

    // const signWithEmailPass = (email,password)=> {
    //     console.log(email, password);

      const signWithEmailPass= (email,password)=> {
       return signInWithEmailAndPassword(auth,email,password)
      } ;
    //         .then((userCredential) => { 
    //             const user = userCredential.user;
    //             setUser(user)
    //         })
    //         .catch((error) => {               
    //             const errorMessage = error.message;
    //             setError(errorMessage)
    //         })
    //         .finally(()=>{
    //             setIsLoading(false)
    //         })
    //         ;

    // }



    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
           } else {
            
            }
          })
          setIsLoading(false);
          
    },[])


    return { googleSingIn,signWithEmailPass,createAccount,auth,user,setUser,error,setError, logOut,isLoading,setIsLoading}
};

export default useFirebase;