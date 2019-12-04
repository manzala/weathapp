import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import { MenuItem, menuItemContainer, Menu, Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import Header from './components/Header';
import CityList from './components/CityList';
import { cities } from './db.js';
import './styles/SearchBar.css';

const TypeaheadMenuItem = menuItemContainer(MenuItem);



class App extends Component {
  state = {
    selected: [],
    history: []
  }
  render() {
    return (
      <div>
        <Header title="Weather Monster" />
        <div className='search-bar'>
          <Typeahead id='sample'
            multiple
            options={cities.map((city) => (city.name))} placeholder="Enter a city..."
            onChange={(selected) => {
              if (selected.length >= 1) {
                console.log(selected)
                this.setState({...this.state, history: this.state.history.concat(selected)})
              }
            }}
            selected={this.state.selected}
            renderMenuItemChildren={(option, props, index) => {
            return (<span className='ta-item'  onClick={() => console.log("hi")}>{option}</span>)
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;










