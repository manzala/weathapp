import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import { MenuItem, menuItemContainer, Menu, Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import {Card, Button} from 'react-bootstrap';
import Header from './components/Header';
import CityList from './components/CityList';
import { cities } from './db.js';
import './styles/SearchBar.css';
import { connect } from 'react-redux';
import * as actionCreator from "./store/actions/actions"



class App extends Component {

  render() {
    const cityListComponents = this.props.cityList.map((city,index) =>
    <Card style={{ width: '18rem', padding: "33px", margin:"20px auto"}}>
    <Card.Body  >
  <Card.Title>{city.name}</Card.Title>
      <Card.Text>
        {JSON.stringify(city.coords)}
      </Card.Text>
    </Card.Body>
  </Card>
    );
    
    return (
      <div>
        <Header title="Weather Monster" />
        <div className='search-bar'>
          <Typeahead id='sample'
            options={this.props.dropDownList} placeholder="Enter a city..."
            selected={this.props.selected}
            emptyLabel={'No more cities listed'}
            renderMenu={(results, menuProps) => (
              <Menu {...menuProps}>
                {results.map((result, index) => (
                  <MenuItem
                    onClick={() => this.props.onCityAdd(result)}
                    option={result}
                    position={index}>
                  {result}
                  </MenuItem>
                ))}
              </Menu>
            )}
            //renderMenuItemChildren={(option, props, index) => {
            //  return (<span className='ta-item' onClick={ () => {this.props.onCityAdd(option); }}>{option}</span>)
            //}}
          />
        </div>
        <div>
            {cityListComponents}
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



