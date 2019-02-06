import React, { Component } from 'react';

import {
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';

import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

import Login from '../login/login';
import Main from '../main/main';

import { connect } from 'react-redux';

const mapStateToProps = state => {

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

};

export default connect(mapStateToProps, mapDispatchToProps)(Router);