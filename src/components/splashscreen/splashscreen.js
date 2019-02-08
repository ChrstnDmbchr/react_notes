//import React from 'react';
import React from 'react';
import SideBarItem from '../sidebarItem/SideBarItem';
import './splashscreen.scss'

const SplashScreen = (props) => (
    <div className='splash-screen d-flex flex-column'>
        <h1 className='mb-30'>You have no notebooks</h1>
        <SideBarItem size={50} icon={'sad'} color={'#fff'}/>
    </div>
);

export default SplashScreen;