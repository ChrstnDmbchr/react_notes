import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/store';
import Login from './components/login/login';
// import SideBar from './components/sidebar/sidebar';
// import Note from './components/note/note';

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Login />
                </PersistGate>
            </Provider>
        )
    }
}