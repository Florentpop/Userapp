import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import EditForm from './components/EditForm';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectRoute';


const Router = () => {
    return (
        <BrowserRouter>
            <ProtectedRoute exact path="/" component={App} />
            <Route path="/edit/:id" component={EditForm} />
            <Route path="/register" component={Register} />
            <Route path="/Login" component={Login} />

        </BrowserRouter>
    );
}

export default Router;
