//import React from 'react';
import React, { Component } from 'react';
import CustomIcon from '../customIcon/customIcon';
import './splashscreen.scss'


class SplashScreen extends Component {
    state = {
        isCreatingNotebook: true,
    }

    changeState = () => {
        this.setState({
            isCreatingNotebook: !this.state.isCreatingNotebook,
        })
    }

    render() {
        return(
            <div className='splash-screen d-flex flex-column'>
                <h1 className='mb-30'>You have no notebooks</h1>
                <CustomIcon size={50} icon={'sad'} styles={{color: '#fff'}}/>
                {/* {
                    this.state.isCreatingNotebook ?
                    <input className=''/> : null
                } */}
                {/* <button className='btn btn-outline-light mt-20 mt-4 letter-spacing-1' onClick={this.changeState}>{ this.state.isCreatingNotebook ? 'Create' : 'Create Notebook' }</button> */}
            </div>
        )
    }
}


export default SplashScreen;