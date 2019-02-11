import React, { Component }from 'react';
import Note from '../note/note';
import Navigation from '../navigation/navigation';
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

  componentWillReceiveProps (nextProps) {
    if (!nextProps.isAuthorized) this.props.history.push("/login");
  }

  render() {
      return(
          <div>
            <SplashScreen/>
            <Navigation />
          </div>
      )
  }
}

const mapDispatchToProps = state => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);