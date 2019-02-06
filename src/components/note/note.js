import React, { Component } from 'react';
import { connect } from 'react-redux';
import './note.scss';

const mapStateToProps = state => {
    return {
        // state data definitions 
    }
};

class Note extends Component {
    render() {
        return(
            <div className='note d-flex flex-row'>
                <textarea></textarea>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    // dispatch logic
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);