import React from 'react';
import DocumentTitle from 'react-document-title';

import { Router } from 'react-router';

var createReactClass = require('create-react-class')
var Registration = createReactClass({
    render() {
        return (
            <DocumentTitle title={`Registration`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Registration</h3>
                            <hr />
                        </div>
                    </div>
                    <Router>
                        <div className='sp-login-form'>
                            <div className="row" data-spIf="account.created">
                                <div className="col-sm-offset-4 col-xs-12 col-sm-4">
                                    <p className="alert alert-success" data-spIf="account.enabled">
                                        Your account has been created. <Router>Login Now</Router>.
                                    </p>
                                    <div data-spIf="!account.enabled">
                                        <p className="alert alert-success">Your account has been created. Please check your email for a verification link.</p>
                                        <p className="pull-right">
                                            <Router>Back to Login</Router>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" data-spIf="!account.created">
                                <div className="col-xs-12">
                                    <div className="form-horizontal">

                                        <div className="form-group">
                                            <label htmlFor="username" className="col-xs-12 col-sm-4 control-label">Username</label>
                                            <div className="col-xs-12 col-sm-4">
                                                <input type="text" className="form-control" id="username" name="username" placeholder="username" required={ true } />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                                            <div className="col-xs-12 col-sm-4">
                                                <input type="text" className="form-control" id="password" name="password" placeholder="password" required={ true } />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Confirm Password</label>
                                            <div className="col-xs-12 col-sm-4">
                                                <input type="text" className="form-control" id="password" name="password" placeholder="password" required={ true } />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="fullname" className="col-xs-12 col-sm-4 control-label">Full Name</label>
                                            <div className="col-xs-12 col-sm-4">
                                                <input type="text" className="form-control" id="fullname" name="fullname" placeholder="fullname" required={ true } />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="customData.color" className="col-xs-12 col-sm-4 control-label">Color</label>
                                            <div className="col-xs-12 col-sm-4">
                                                <input type="text" className="form-control" id="email" name="email" placeholder="email" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="company_name" className="col-xs-12 col-sm-4 control-label">Company name</label>
                                            <div className="col-xs-12 col-sm-4">
                                                <input type="password" className="form-control" id="company_name" name="company_name" placeholder="company_name" required={ true } />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="position_name" className="col-xs-12 col-sm-4 control-label">Your position</label>
                                            <div className="col-xs-12 col-sm-4">
                                                <input type="position_name" className="form-control" id="position_name" name="position_name" placeholder="position_name" required={ true } />
                                            </div>
                                        </div>

                                        <div key="register-button" className="form-group">
                                            <div className="col-sm-offset-4 col-sm-4">
                                                <p className="alert alert-danger" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                                                <button type="submit" className="btn btn-primary">Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Router>
                </div>
            </DocumentTitle>
        );
    }
});

export default Registration;