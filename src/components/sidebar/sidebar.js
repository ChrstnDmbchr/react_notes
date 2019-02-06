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
                <SideBarItem icon={'documentIcon'} size={34} callBack={this.testfunc}/>
                <SideBarItem icon={'share'} size={34} callBack={this.testfunc}/>
                <SideBarItem icon={'trashB'} size={34} callBack={this.testfunc}/>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    // dispatch logic
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);