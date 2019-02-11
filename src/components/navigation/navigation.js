import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomIcon from '../customIcon/customIcon';
import './navigation.scss';

import { googleLogout } from '../login/action-types';

const mapStateToProps = () => {
    return {}
};

class Navigation extends Component {
    render() {
        const {onGoogleLogout} = this.props;
        return(
            <div className='sidebar d-flex'>
                <CustomIcon icon={'documentIcon'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
                <CustomIcon icon={'share'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
                <CustomIcon icon={'trashB'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
                <CustomIcon icon={'settings'} classes={'sidebar__item'} size={32} callBack={onGoogleLogout}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGoogleLogout: () => dispatch(googleLogout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);