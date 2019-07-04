import React from 'react';
import DocumentTitle from 'react-document-title';
import { Router } from 'react-router';
var createReactClass = require('create-react-class')
var Login = createReactClass({

    render() {
        return (
            <DocumentTitle title={`Login`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Login</h3>
                            <hr />
                        </div>
                    </div>
                    <Router />
                    <hr />
                    <a className="pull-right" href="Registration.js">Registration</a>
                </div>
            </DocumentTitle>
        );
    }
});

export default Login;