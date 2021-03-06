import React, { Component } from 'react';

import {
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';


import Login from '../login/login';
import Main from '../main/main';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {}
}

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);