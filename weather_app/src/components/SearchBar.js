import React from 'react'
import App from './App'

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div className="ui massive icon input">
          
            <input type="text" placeholder="City,zipcode..."/>
            <i class="search icon"></i>
         
        </div>
      </div>
    );
  }
}

export default SearchBar;