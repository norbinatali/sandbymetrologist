import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';
import Registration from './Registration'
import { Router } from 'react-router';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CookiesProvider } from 'react-cookie';

class App extends Component{

    render() {
        return (
            <CookiesProvider>
                <Router history={BrowserRouter()} component={Home} >
                    <Route path ='/Login' component={Login} />
                    <Route path='/Registration' component={Registration} />
                </Router>

            </CookiesProvider>

        );
    }
}

export default App;
