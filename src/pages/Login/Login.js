import React, { useState } from 'react';
import './Login.css'
import { Form,Button } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import google from './google.png'
import {useHistory,useLocation} from 'react-router-dom'


const Login = () => {
        // email-state
    const [email,setEmail] = useState('');
    //  password-state
    const [password,setPassword] = useState(''); 
    const [retypePassword,setRetypePassword] = useState(''); 
        // user-state-checker
    const [checker,setChecker] = useState(false);
    const [passAlert,setPassAlert] = useState('');
       
    // user-status-update 
    const  [status, setStatus] = useState('have an account')


    const history = useHistory();
    const location = useLocation();


    const redirectURL = location.state?.from || '/home';

    const {signWithEmailPass, googleSingIn,setUser,error,setError,setIsLoading,createAccount,} = useAuth()
    

    const handleSubmit = (e) => {
       e.preventDefault();
       if(checker){

        // sign-with-email-password

            signWithEmailPass(email,password)
            .then((result) => { 
                    const user = result.user;                 
                    history.push(redirectURL);
                    setUser(user)  
                    setPassword('')
                    setEmail('')
                })
                .catch((error) => {               
                    const errorMessage = error.message;
                    setError(errorMessage);
                })
                .finally(()=>{
                    setIsLoading(false);
                })
       }else{           
           if(password===retypePassword){

            // createAccount-with-email-and-password

            createAccount(email, password)
                    .then((result) => {                      
                        const user = result.user;
                        history.push(redirectURL);
                        setUser(user);                       
                        setPassword('')
                        setEmail('')
                        setRetypePassword('')                      
                    })
                    .catch((error) => {                       
                        const errorMessage = error.message;
                        setError(errorMessage);                       
                    })
                    .finally(()=>{
                        setIsLoading(false);
                    })
           }else{
            setPassAlert("password dosen't match")
           }
        }      
    }


     // google-sign-in

    const handleGoogleSingIn = ()=> {
        setIsLoading(true);
        googleSingIn()
        .then((result) => {                
            const user = result.user;
            history.push(redirectURL);
            setUser(user);
            setIsLoading(false)
           
        }).catch((error) => {            
            const errorMessage = error.message;          
            setError(errorMessage);
        })
        .finally(()=>setIsLoading(false))
        
    } 

    const handleCheck=(e)=>{
        const sts = e.target.checked;
        setChecker(sts)

        if(!checker){
        setStatus('sign up')
        }else{
            setStatus('have an account?')
        }
    }


    return (
        <div className="form-bg container-fluid">
            <div className="container-fluid container-lg mx-auto my-5 row mb-0 mt-0">
            <div className="col-12 col-lg-3"></div>    
            <Form className="p-5 border col-12 col-lg-6 my-5 banner">
                <h3 className="my-4 text-danger">{checker? 'Please LogIn': 'Please Register'}</h3>                 
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-danger fs-4">Email address</Form.Label>
                    <Form.Control onChange={(e)=> setEmail(e.target.value)} value={email} className="bg-white border-0 p-2" type="email" placeholder="Enter email" required/>
                </Form.Group>
                    
                   
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-danger fs-4">Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password} className="bg-white border-0 p-2" type="password" placeholder="Password" required/>
                </Form.Group>

               

               {!checker && ( <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-danger fs-4">Retype Password</Form.Label>
                    <Form.Control onChange={(e)=>setRetypePassword(e.target.value)} value={retypePassword} className="bg-white border-0 p-2" type="password" placeholder="retype-password" required/>
                </Form.Group>
                  )}
                
                  
                { !checker && <p className="text-danger">{passAlert}</p>}
  
                 
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="text-warning" onChange={handleCheck} type="checkbox" label={status} />
                </Form.Group>


                <Button onClick={handleSubmit} variant="primary" type="submit">
                 {checker? 'Sign in': 'Sign UP'}
                </Button>

               {!checker && <>
                <h5 className="my-4 text-warning">----------or-------</h5>
                        
                 <button className="border-0 bg-none p-3" onClick={handleGoogleSingIn}><img src={google} alt="" /></button> </>}

                <h5 className="text-danger mt-2">{error}</h5>
            </Form>      

             <div className="col-12 col-lg-3"></div>
            </div>
        </div>
    );
};

export default Login;