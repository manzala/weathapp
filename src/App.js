import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import { MenuItem, menuItemContainer, Menu, Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import Header from './components/Header';
import CityList from './components/CityList';
import { cities } from './db.js';
import './styles/SearchBar.css';
import { connect } from 'react-redux';
import * as actionCreator from "./store/actions/actions"



class App extends Component {
  render() {
    //map props to store

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
              }
            }}
            selected={this.props.selected}
            renderMenuItemChildren={(option, props, index) => {
              return (<span className='ta-item' onClick={ () => this.props.onCityAdd(option)}>{option}</span>)
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.cityList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCityAdd: (cityName) => dispatch(actionCreator.addCity(cityName)),
    onCityRemove: (cityName) => dispatch(actionCreator.removeCity(cityName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);










