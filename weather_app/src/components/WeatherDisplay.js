import React from 'react'


class WeatherDisplay extends React.Component {
  render() {
    return (
      <div>
        <div className="ui three stackable cards">
          <div className="card">
            <div className="image">
              <img src="../resources/sunny.jfif" />
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default WeatherDisplay;