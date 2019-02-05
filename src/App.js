import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import Login from './components/login/login';
// import checkUserExists from './containers/user/action-types';

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Login />
            </Provider>
        )
    }
}