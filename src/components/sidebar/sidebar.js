import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBarItem from '../sidebarItem/SideBarItem';
import './sidebar.scss';


const mapStateToProps = () => {

};

class SideBar extends Component {
    testfunc = (dispatch) =>  {
        console.log('ITS ALSO WORKING');
    }
    
    render() {
        return(
            <div className='sidebar d-flex'>
                <SideBarItem icon={'documentIcon'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
                <SideBarItem icon={'share'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
                <SideBarItem icon={'trashB'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    // dispatch logic
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);