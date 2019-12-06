const initialState = {
    cityList: [],
    errorMessage: "",
    selected: [],
    dropDownList: ['London', 'Paris', 'Bangkok', 'Tokyo', 'Berlin', 'Tehran', 'Chennai', 'Karachi', 'Castries', 'Kingston'
    ]
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_CITY":
            newState.cityList = [...newState.cityList, action.payload]
            newState.dropDownList = [...newState.dropDownList].filter(city => city !== action.payload.name)
            break;
        case "REMOVE_CITY":
            newState.cityList = action.payload
            break;
        default:
            return newState;
    }
    return newState
};

export default reducer;