import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, googleLogout } from './action-types';
import './login.scss';

const mapStateToProps = state => {
    return {
        name: state.user.profile.name,
        isAuthorized: state.user.isAuthorized,
    };
};

class Login extends Component {
    componentWillReceiveProps (nextProps) {
        if (nextProps.isAuthorized) this.props.history.push("/");
    }

    componentDidMount () {
        if (this.props.isAuthorized) this.props.history.push("/");
    }
    
    render() {
        const { onGoogleLogout, onGoogleLogin, isAuthorized, name } = this.props;

        let userName = isAuthorized ? name.split(' ')[0] : null;
        return(
            <div className='login-container'>
                <button  onClick={ isAuthorized ? onGoogleLogout: onGoogleLogin} className='login-btn login-btn--google'>
                    {`${isAuthorized ? 'Sign out' : 'Sign in with Google'}`}
                </button>
                <h1>
                    {`Welcome, ${isAuthorized ? userName : 'Please sign in'}`}
                </h1>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGoogleLogin: () => dispatch(googleLogin()),
        onGoogleLogout: () => dispatch(googleLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);