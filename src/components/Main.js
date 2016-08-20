require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import WeatherComponent from 'components/WeatherComponent'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <WeatherComponent actions={this.props.actions} weather={this.props.weather}/>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent
