import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomIcon from '../customIcon/customIcon';
import './navigation.scss';

import {getClosest} from '../../helpers/getClosest/getClosest';

import { googleLogout } from '../login/action-types';

const mapStateToProps = () => {
    return {}
};

class Navigation extends Component {
    
    state = {
        SlideInButtons: [
            {
                text: 'New Note',
                cb: () => {console.log('1234567')},
            }
        ],
        SlideBarOpen: false,
    }

    setActive() {
        this.setState({
            SlideBarOpen: !this.state.SlideBarOpen
        });
    }

    someLog(txt) {
        console.log(txt);
    }

    render() {
        const {onGoogleLogout} = this.props;
        return(
            <div className='main-navigation'>
                <div className={`sidebar-slide ${this.state.SlideBarOpen ? 'active' : null}`}>
                    {this.state.SlideBarOpen ? <SlideInButtons buttons={this.state.SlideInButtons}/> : null}
                </div>
                <div className='sidebar d-flex'>
                    <CustomIcon icon={'documentIcon'} classes={'sidebar__item'} size={32} callBack={(e) => this.setActive()}
                        styles={{
                            color: '#fff',
                            size: '1.25em'
                        }}
                    />
                    <CustomIcon icon={'share'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
                    <CustomIcon icon={'trashB'} classes={'sidebar__item'} size={32} callBack={this.testfunc}/>
                    <CustomIcon icon={'settings'} classes={'sidebar__item'} size={32} callBack={onGoogleLogout}/>
                </div>
            </div>
        )
    }
}

const SlideInButtons = ({buttons}) => {
    return buttons.map((button, i) => {
        return (
            <button className='sidebar-slide__btn' key={i} onClick={() => button.cb()}>{button.text}</button>
        )
    })
}

const mapDispatchToProps = dispatch => {
    return {
        onGoogleLogout: () => dispatch(googleLogout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);