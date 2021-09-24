import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, component: Component, ...rest }) {
    return (
        <Route 
            {...rest}
            render={(props) => {
                if(isAuthenticated)
                    return <Component />

                if(!isAuthenticated || isAuthenticated === false)
                    return (<Redirect to={{ pathname: '/', state: { from: props.location } }} />);
            }}        
        />
    )
}

export default ProtectedRoute;