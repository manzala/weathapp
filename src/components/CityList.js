import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreator from "../store/actions/actions";
import { Card, Row, Col, } from 'react-bootstrap';
import { chunk } from 'lodash'
import '../styles/CityList.css'

const iconUrl = "http://openweathermap.org/img/wn/"

class CityList extends Component {
    render() {
        return (
            chunk(this.props.cityList, 3).map((cityChunk, index) =>
                <Row key={index} className='city-row'>
                    {cityChunk.map((city, index) => (
                        <Col key={Math.random()} className='city-col'>
                            <Card className="city-card" key={Math.random()} style={{}} onClick={() => this.props.onCityRemove(city)}>
                                <Card.Body>
                                    <Card.Title>{city.name}</Card.Title>
                                    <Card.Text>
                                        <span>Min Temp: <b>{city.main.temp_min}&#176;C</b> </span> <br></br>
                                        <span>Max Temp: <b>{city.main.temp_max}&#176;C</b> </span> <br></br>
                                        <span>Current Weather: <b>{city.main.temp}&#176;C </b></span> <img src={`${iconUrl}${city.weather[0].icon}.png`}/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cityList: state.cityList,
        selected: state.selected,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCityAdd: (cityName) => dispatch(actionCreator.addCity(cityName)),
        onCityRemove: (cityName) => dispatch(actionCreator.removeCity(cityName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
