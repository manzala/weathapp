import React from 'react'
import ReactDOM from 'react-dom';
import CityList from './../../../CityList';
import { isTSAnyKeyword, exportAllDeclaration} from '@babel/types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../../../store/reducers/reducer';
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));


it ("renders without crashing", () =>  {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}>
        <CityList /></Provider>, div);
})




