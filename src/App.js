import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import {MenuItem,menuItemContainer, Menu, Typeahead, Highlighter} from 'react-bootstrap-typeahead';
import Header from './components/Header';
import CityList from './components/CityList';
import {cities} from './db.js';
import './styles/SearchBar.css';

const TypeaheadMenuItem = menuItemContainer(MenuItem);

function App() {
  let state = {
    selected: []
  }
  return (

    <div>
      <Header title="Weather Monster"/>
       <div className='search-bar'>
          <Typeahead id='sample'
          multiple 
          options= {cities.map((city)=> (city.name))} placeholder="Enter a city..."
          onChange={(selected) => {
          console.log('hi')
          }}
          selected={state.selected}
          
          />
      </div> 
    </div>
  );
}

export default App;












