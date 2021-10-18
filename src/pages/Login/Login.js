import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import google from './google.png'
import {useHistory,useLocation} from 'react-router-dom'


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    const [retypePassword,setRetypePassword] = useState(''); 
    const [checker,setChecker] = useState(false);
    const [passAlert,setPassAlert] = useState('');

    const history = useHistory();
    const location = useLocation();


    const redirectURL = location.state?.from || '/home';
    console.log(redirectURL);


    const {signWithEmailPass,auth, googleSingIn,setUser,error,setError,setIsLoading,createAccount} = useAuth()

    const handleSubmit = (e) => {
       e.preventDefault();
       if(checker){
            signWithEmailPass(email,password)
            .then((userCredential) => { 
                    const user = userCredential.user;
                    setUser(user)
                    history.push(redirectURL)  
                    setPassword('')
                    setEmail('')
                })
                .catch((error) => {               
                    const errorMessage = error.message;
                    setError(errorMessage)
                })
                .finally(()=>{
                    setIsLoading(false)
                })
       }else{           
           if(password===retypePassword){
            createAccount(email, password)
                    .then((userCredential) => {                      
                        const user = userCredential.user;
                        setUser(user)
                        history.push(redirectURL)
                        setPassword('')
                        setEmail('')
                        setRetypePassword('')                      
                    })
                    .catch((error) => {                       
                        const errorMessage = error.message;
                        setError(errorMessage)                       
                    })
                    .finally(()=>{
                        setIsLoading(false)
                    })
           }else{
            setPassAlert("password dosen't match")
           }
        }      
    }




    const handleGoogleSingIn = ()=> {
        googleSingIn()
        .then((result) => {                
            const user = result.user;
            setUser(user)
            history.push(redirectURL)
        }).catch((error) => {            
            const errorMessage = error.message;          
            setError(errorMessage)
        })
        .finally(()=>{
            setIsLoading(false)
        })
        ;
    } 


    return (
        <div>
            <div className="container-fluid container-lg mx-auto my-5 row">
            <div className="col-12 col-lg-3"></div>    
            <Form className="p-5 border bg-light col-12 col-lg-6">
                <h3 className="my-4">{checker? 'Please LogIn': 'Please Register'}</h3>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=> setEmail(e.target.value)} value={email} className="bg-white border-0 p-2" type="email" placeholder="Enter email" required/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password} className="bg-white border-0 p-2" type="password" placeholder="Password" required/>
                </Form.Group>

               {!checker && ( <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setRetypePassword(e.target.value)} value={retypePassword} className="bg-white border-0 p-2" type="password" placeholder="retype-password" required/>
                </Form.Group>


                  )}
                { !checker && <p className="text-danger">{passAlert}</p>}

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={(e)=>setChecker(e.target.checked)} type="checkbox" label="have an account?" />
                </Form.Group>


                <Button onClick={handleSubmit} variant="primary" type="submit">
                 {checker? 'Sign in': 'Sign UP'}
                </Button>
                <h5 className="my-4">----------or-------</h5>
               
                <button className="border-0 bg-none p-3" onClick={handleGoogleSingIn}><img src={google} alt="" /></button>


                <h5>{error}</h5>
            </Form>
          
             <div className="col-12 col-lg-3"></div>
            </div>
        </div>
    );
};

export default Login;