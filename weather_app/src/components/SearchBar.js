import React from 'react'


class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <div className="ui massive icon input ">
          
            <input type="text" placeholder="City,zip code..."/>
            <i class="search icon"></i>
         
        </div>
      </div>
    );
  }
}

export default SearchBar;