import React from 'react'
import sunny from '../resources/sunny.jfif'
import thunder from '../resources/thunder.jfif'
import fog from '../resources/Fog.jfif'

class WeatherDisplay extends React.Component {
  render() {
    return (
      <div>
        <div className="ui five stackable cards">
          <div className="card">
            <div className="image">
              <img src={sunny} />
            </div>
          </div>
        
         
          <div className="card">
            <div className="image">
              <img src={thunder} />
            </div>
          </div>
        
        
          <div className="card">
            <div className="image">
              <img src={fog} />
            </div>
          </div>

         </div>
      </div>
    )
  }
}


export default WeatherDisplay;