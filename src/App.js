import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import { MenuItem, Menu, Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import Header from './components/Header';
import CityList from './components/CityList';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from "./store/actions/actions"



class App extends Component {

  render() {

    return (
      <div className="page-container">
        <Header title="Weather Monster" />
        <div className='bar-container'>
          <Typeahead className='search-bar' id='search-bar-id'
            options={this.props.dropDownList} placeholder="Select a city..."
            selected={this.props.selected}
            onChange={() => { }}
            emptyLabel={'No more cities listed'}
            renderMenu={(results, menuProps) => (
              <Menu {...menuProps}>
                {results.map((result, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => this.props.onCityAdd(result)}
                    option={result}
                    position={index}>
                    {result}
                  </MenuItem>
                ))}
              </Menu>
            )
            }
          />
        </div>
        <div className='city-grid'>
          <CityList />
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityList: state.cityList,
    dropDownList: state.dropDownList,
    selected: state.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCityAdd: (cityName) => dispatch(actionCreator.addCity(cityName)),
    onCityRemove: (cityName) => dispatch(actionCreator.removeCity(cityName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



