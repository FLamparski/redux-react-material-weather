'use strict';

import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

require('styles//Weather.scss')

class WeatherComponent extends React.Component {
  componentWillMount() {
    this.setState({cityInput: this.props.weather.city})
  }
  componentDidMount() {
    this.props.actions.setCity(this.props.weather.city)
  }
  handleCityChange(event) {
    this.setState({cityInput: event.target.value})
  }
  setCityClick() {
    if (this.state.cityInput) {
      this.props.actions.setCityName(this.state.cityInput)
      this.props.actions.setCity(this.state.cityInput)
    }
  }
  render() {
    const w = this.props.weather
    return (
      <Paper className="weather-component">
        <div className="city-control">
          <TextField type="text" className="city-input" name="city" floatingLabelText="City" value={this.state.cityInput} onChange={this.handleCityChange.bind(this)} />
          <FlatButton primary className="city-button" onTouchTap={this.setCityClick.bind(this)} disabled={w.isLoading}>Set City</FlatButton>
        </div>
        <div className="weather-output">
          <CircularProgress style={{display: w.isLoading ? 'block' : 'none'}}/>
          <div style={{display: w.weather ? 'block' : 'none'}}>
            <h2>Weather in {w.city}:</h2>
            <p>Temperature is {(w.weather || {}).temp}&deg;F {(w.weather || {}).text}</p>
          </div>
        </div>
      </Paper>
    )
  }
}

WeatherComponent.displayName = 'WeatherComponent'

// Uncomment properties you need
// WeatherComponent.propTypes = {};
// WeatherComponent.defaultProps = {};

export default WeatherComponent
