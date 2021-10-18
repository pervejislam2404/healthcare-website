import React, { createContext } from 'react';
import useFirebase from '../Firebase/useFirebase';

export const yogaContext = createContext()

const AuthProvider = ({children}) => {

    const myValue = useFirebase()
    return (
        <yogaContext.Provider value={myValue}>
            {children}
        </yogaContext.Provider> 
    );
};

export default AuthProvider;