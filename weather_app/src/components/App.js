import React from 'react'
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import CurrentWeather from './CurrentWeather';

class App extends React.Component {
  render() {
    return(
       <div className= "ui grid container">
         <SearchBar />
         <CurrentWeather />
         <WeatherDisplay/>
       </div>

    )
  }
}

export default App;