import{ useContext } from 'react';
import { yogaContext } from './AuthProvider';

const useAuth = () => {
    return useContext(yogaContext)
};

export default useAuth;