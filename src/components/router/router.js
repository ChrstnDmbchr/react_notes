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

import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        isAuthorized: state.user.isAuthorized
    }
}

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = () => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Router);