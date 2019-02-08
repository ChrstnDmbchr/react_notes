import React, { Component }from 'react';
import Note from '../note/note';
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import SplashScreen from '../splashscreen/splashscreen';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
      isAuthorized: state.user.isAuthorized
  }
}

class Main extends Component {
  componentDidMount () {
    if (!this.props.isAuthorized) this.props.history.push("/login");
  }

  render() {
      return(
          <div>
            {/* <Header/>
            <Note />
             */}
            <SplashScreen/>
            <SideBar />
          </div>
      )
  }
}

const mapDispatchToProps = state => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);