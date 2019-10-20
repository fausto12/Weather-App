import React from 'react'
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';

class App extends React.Component {
  render() {
    return(
       <div>
         <SearchBar />
         <WeatherDisplay/>
       </div>

    )
  }
}

export default App;