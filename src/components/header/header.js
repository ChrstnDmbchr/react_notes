import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBarItem from '../sidebarItem/SideBarItem'; 

import './header.scss';

const mapStateToProps = state => {

};

const mapDispatchToProps = () => {

};

class Header extends Component {
    testfunc = () => console.log('Should go back');

    render() {
        return(
            <div className='header d-flex align-items-center'>
                <SideBarItem classes={'justify-content-start col-4'} icon={'arrowLeftA'} size={32} callBack={this.testfunc}/>
                <h2 className='text-center col-4'>Note Books</h2>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);