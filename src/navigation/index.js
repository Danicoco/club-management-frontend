import React from 'react';
import  { Route, Switch  }  from 'react-router-dom';
import { useSelector } from 'react-redux';

//private routes
import ProtectedRoute from './ProtectedRoute';

//import all pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Club from '../pages/Club';

const Navigation = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
            <Switch>
                <Route path='/' component={Login} exact />
                <Route path='/register' component={Register} />
                <ProtectedRoute path='/dashboard' component={Dashboard} isAuthenticated={isAuthenticated} />
                <ProtectedRoute path='/club/:id' component={Club} isAuthenticated={isAuthenticated} />
            </Switch>
    )
}

export default Navigation;