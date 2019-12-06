const initialState = {
    cityList: [],
    selected: [],
    dropDownList: ['London', 'Paris', 'Bangkok', 'Tokyo', 'Berlin', 'Tehran', 'Chennai', 'Karachi', 'Castries', 'Kingston', 'Kingsbury']
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_CITY":
            newState.cityList = [...newState.cityList, action.payload].sort((a,b) => b.main.temp_max - a.main.temp_max)
            newState.dropDownList = [...newState.dropDownList].filter(city => city !== action.payload.name)
            break;
        case "REMOVE_CITY":
            newState.cityList = [...newState.cityList].filter(city => city.name !== action.payload.name).sort((a,b) => b.main.temp_max - a.main.temp_max)
            newState.dropDownList = [...newState.dropDownList, action.payload.name]
            break;
        default:
            return newState;
    }
    return newState
};

export default reducer;