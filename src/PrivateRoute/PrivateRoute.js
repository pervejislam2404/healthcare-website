import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth() 
   
    if(isLoading){
      return <Spinner className="w-50 mx-auto mt-5 pt-5" animation="grow" />
    }
    return (
      <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
      );
};

export default PrivateRoute;